import { useEffect } from "react";
import { useState } from "react";

function Commu() {

    const basic = [
        { title : 'Hey there', content : 'Lorem ipsum dolor amet.'},
        { title : 'Hello', content : 'Lorem ipsum dolor amet.'},
        { title : 'Hi!', content : 'Lorem ipsum dolor amet.'},
        { title : 'Smile', content : 'Lorem ipsum dolor amet.'}
    ]
    const getLocalItems = () =>{
        let data = localStorage.getItem("posts");

        if(data) {
            return JSON.parse(data);
        }else {
            return basic;
        }
    }

    const [posts] = useState(getLocalItems);

    useEffect(() => {
        localStorage.setItem("posts", JSON.stringify(posts));
    },[posts])

    return(
        <section className="commu">
            <div className="inner">
                <h2>RECENT NEWs</h2>

                <div className="txtBox">
                    {
                        posts.map((post,index) => {
                            if(index < 6) {
                                return(
                                    <article key={index}>
                                        <h3>{post.title}</h3>
                                        <p>{post.content}</p>
                                    </article>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Commu;