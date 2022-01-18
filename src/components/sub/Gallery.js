import axios from "axios";
import {useEffect , useRef, useState} from "react";
import Masonry from "react-masonry-component";

const body = document.querySelector("body");

const masonryOptions = {
    fitWidth :false,
    //columnWidth :200,
    gutter :0,
    itemSelector : ".item"
}

function Gallery() {
    const top = useRef(null);
    const right = useRef(null);
    const bottom = useRef(null);
    const left = useRef(null);
    const pop = useRef(null);
    const topLeft = useRef(null);

    const path = process.env.PUBLIC_URL;
    const titPic = `${path}/img/titPic.png`;

    let [items,setItems] = useState([]);
    let [isPop,setIsPop] = useState(false);
    let [index,setIndex] = useState(0);
    

    const api_key = "7bc9dd83db29619be503141072e9b905";
    const url = `https://www.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${api_key}&per_page=21&format=json&nojsoncallback=1`;
    const list = useRef(null);

    useEffect(() => {
        axios
        .get(url)
        .then(json => {
            console.log(json.data.photos.photo);
            setItems(json.data.photos.photo);
        })
    },[url])

    return(
        <section  className="gallery">
            <div className="topPic">
            <aside ref={pop}>
                    <div className="top" ref={top}></div>
                    <div className="right" ref={right}></div>
                    <div className="bottom" ref={bottom}></div>
                    <div className="left" ref={left}></div>
                    <div className="topLeft" ref={topLeft}></div>
                </aside>
                        
                <p>Gallery</p>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, doloribus!</span>
            </div>
            <div className="inner">
                <h1><a href="#">Gallery</a></h1>
                <span>We're so happy you have landed here! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, mollitia.</span>                
                <div className="line"></div>
                <div className="line2"></div>
                <div className="titPic">
                        <img src={titPic} />
                </div>

                <div className="list" ref={list}>
                    <Masonry 
                        className={"frame"}
                        elementType={"ul"}
                        disableImagesLoaded={false}
                        updateOnEachImageLoad={false}
                        options={masonryOptions}
                    >
                        {
                            items.map((item,index) => {
                                const imgSrc = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`;

                                return(
                                    <li key={index} className="item">
                                        <div className="inner">
                                            <div className="pic" onClick={()=> {
                                                setIsPop(true);
                                                setIndex(index);
                                                console.log(index);
                                            }}>
                                                <img src={imgSrc} />
                                            </div>
                                            <h2>{item.title}</h2>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </Masonry>
                </div>
            </div>

            {isPop ? <Pop /> : null}
        </section>
    )
    function Pop() {
        const imgSrc = `https://live.staticflickr.com/${items[index].server}/${items[index].id}_${items[index].secret}_b.jpg`;

        useEffect(()=> {
            console.log("pop 생성");
            body.style.overflow = "hidden";

            return() => {
                console.log("pop 제거");
                body.style.overflow = 'auto';
            }
        },[]);

        return(
            <aside className="pop">
                <img src={imgSrc} />
                <p>{items[index].title}</p>
                <span onClick={() => {
                    setIsPop(false);
                }}>Close</span>
            </aside>
        )
    }
}

export default Gallery;

// 어떤 이벤트가 발생했을 때 handle"이벤트명" 으로 작성하는게 일반적이다.
// 예를 들어 handleResize나 handleChange등

