import axios from "axios";
import {useEffect, useState} from "react";

function Community() {
    let [posts, setPosts] = useState([]);
    const path = process.env.PUBLIC_URL;
    const url = `${path}/db/community.json`;

    useEffect(() => {
        axios
        .get(url)
        .then(json => {
            console.log(json.data.data);
            setPosts(json.data.data);
        })
    },[url]); 
    return(
        <main id="community">
            <div className="inner">
                <h1><a href="#">Frequently Asked Questions</a></h1>
                <p>We’re on a mission to build the world’s best community for creatives to share, grow, and get hired.</p>
                <div className="thead">
                    <span className="num">Number</span>
                    <span className="title">Title</span>
                </div>
                {
                    posts.map((data,index) => {
                        return (
                                <article key={index}>
                                    <span>{data.num}</span>
                                    <h1>{data.title}</h1>
                                    <a href="#"><i className="fas fa-chevron-up"></i></a>
                                </article>
                        )
                    })
                }
                <div className="btns">
                    <a href="#" className="search">search</a>
                    <a href="#" className="sort">sort</a>
                </div>
                <ul className="pages">
                    <li><a href="#"><i className="fa fa-angle-double-left"></i></a></li>
                    <li><a href="#"><i className="fa fa-angle-left"></i></a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                    <li><a href="#"><i className="fa fa-angle-double-right"></i></a></li>
                </ul>
            </div>
        </main>
    )
}

export default Community;