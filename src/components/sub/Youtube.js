import axios from "axios";
import {useEffect, useState, useRef} from "react";

function Youtube() {
    const top = useRef(null);
    const right = useRef(null);
    const bottom = useRef(null);
    const left = useRef(null);
    const pop = useRef(null);
    const topLeft = useRef(null);

    const path = process.env.PUBLIC_URL;
    const logoSrc = `${path}/img/began_bg.png`;

    let [data, setData] = useState([]);
    let [isPop,setIsPop] = useState(false);
    let [index,setIndex] = useState(0);

    const api_key = "AIzaSyCx0QSN0lGvhIu9p-zYnEGvkJUvf3p_6vI";
    const playListId = 'PL5vDjxZRg7CQQGylvYBQ4Xh5u0pL6ptdk';
    const num = 5;
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${api_key}&playlistId=${playListId}&maxResults=${num}`;
    
    useEffect(()=> {
        axios
        .get(url)
        .then(json => {
            console.log(json.data.items);
            setData(json.data.items);
        })
    },[url,api_key,playListId]);

    return(
        <main className="youtube">
            <div className="topPic">
            <aside ref={pop}>
                    <div className="top" ref={top}></div>
                    <div className="right" ref={right}></div>
                    <div className="bottom" ref={bottom}></div>
                    <div className="left" ref={left}></div>
                    <div className="topLeft" ref={topLeft}></div>
                </aside>
                        
                <p>Youtube</p>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, doloribus!</span>
            </div>
            <div className="inner">
                <h1><a href="#">Youtube</a></h1>
                <img className="logoBg" src={logoSrc} />
                <section className="frame">
                    {
                        data.map((item,index) => {
                            let tit = item.snippet.title;
                            let tit_len = tit.length;
                            let date = item.snippet.publishedAt;
                            let desc = item.snippet.description;
                            let desc_len = desc.length;

                            return(
                                <article key={index}>
                                    <div className="inner">
                                        <div className="pic" onClick={() => {
                                            setIsPop(true);
                                            setIndex(index);
                                        }}>
                                            <img src={item.snippet.thumbnails.medium.url} />
                                            
                                        </div>
                                        <div className="txt">
                                            <h2>{(tit_len > 30) ? tit = tit.substr(0,30)+"..." : tit}</h2>
                                            <span>{date}</span>
                                            <p>{(desc_len > 200) ? desc = desc.substr(0,200)+"..." : desc}</p>
                                            <a href="#">MORE INFO</a>
                                        </div>
                                    </div>
                                </article>
                            )
                        })
                    }
                </section>
                {isPop ? <Pop /> : null}
            </div>
        </main>
    )

    function Pop(){
        return(
            <aside className="pop">
                <iframe src={"https://www.youtube.com/embed/"+data[index].snippet.resourceId.videoId} width='100%' height='100%' allowFullScreen></iframe>
                <span onClick={() => {
                    setIsPop(false);
                }}>Close</span>
            </aside>
        )
    }
}

export default Youtube;