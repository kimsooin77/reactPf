import Anime from '../class/anime.js';
import { useEffect, useReducer, useRef } from "react";

function Department() {
    const path = process.env.PUBLIC_URL;
    const titPic = `${path}/img/titPic.png`;
    const furniturePic1 = `${path}/img/departmentPic1.jpg`;
    const furniturePic2 = `${path}/img/departmentPic2.jpg`;
    const human1 = `${path}/img/departmentPic3.jpg`;
    const human2 = `${path}/img/departmentPic4.jpg`;
    const human3 = `${path}/img/departmentPic5.jpg`;
    const human4 = `${path}/img/departmentPic6.jpg`;
    const top = useRef(null);
    const right = useRef(null);
    const bottom = useRef(null);
    const left = useRef(null);
    const pop = useRef(null);
    const topLeft = useRef(null);

    useEffect(()=>{
        window.addEventListener("road", test);

        return () => {
            window.removeEventListener("road", test);
        }
    },[])

    function test() {
        pop.getComputedStyle.display = 'block';


        new Anime(top.current, {
            prop : "width",
            value : "100%",
            duration: 500,
            callback : () => {
                new Anime(right.current, {
                    prop : "width",
                    value : "100%",
                    duration : 500,
                    callback : () => {
                        new Anime (bottom.current, {
                            prop : "width",
                            value : "100%",
                            duration : 500,
                            callback : () => {
                                new Anime(left.current, {
                                    prop: "height",
                                    value : "100%",
                                    duration : 500
                                })
                            }
                        })
                    }
                })
            }
        })
    }

    return(
        <div id="department">
                <div className="topPic">
                    <aside ref={pop}>
                        <div className="top" ref={top}></div>
                        <div className="right" ref={right}></div>
                        <div className="bottom" ref={bottom}></div>
                        <div className="left" ref={left}></div>
                        <div className="topLeft" ref={topLeft}></div>
                    </aside>
                        
                        <p>Department</p>
                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, doloribus!</span>
                </div>

            <div className="inner">
                <div className="title">
                    <h1>OUR STORY</h1>
                    <span>We're so happy you have landed here!</span>
                    <div className="line"></div>
                    <div className="titPic">
                        <img src={titPic} />
                    </div>
                    <p>Write Burn is founded on belief in the power of letting go to make space to manifest your desires. Our mission is to inspire intentional living through the practice of releasing and inviting so that you can harness your powers of creation. If you are ready to let go, move on, and manifest the life you want - you're in the right place.</p>
                </div>

                <div className="contents">
                    <div className="wrap">
                        <div className="furniture1">
                            <img src={furniturePic1} />
                        </div>
                        <p className="p1">We are a community of lifestyle creatives who inspire beautiful everyday moments by delivering the dreamiest home tours, motivational interviews, tips for intentional living and advice for creatives.</p>
                        <div className="verticalLine"></div>
                        <div className="furniture2">
                            <img src={furniturePic2} />
                        </div>
                        <p className="p2">If you’ve found your way here, you’re most likely a lifestyle creative, business owner, inspiration seeker or simply aspire to live beautifully everyday. Living a beautiful life stretches far beyond a perfectly styled shelf or a gorgeously set table… it comes from being intentional in anything and everything that makes you excited about life.</p>
                    </div>
                    <div className="departmentBg"></div>
                    <p className="teamInfo">MEET OUR TEAM!</p>
                    <div className="peoples">
                        <div className="human1">
                            <img src={human1} />
                            <span>Robert Joe</span>
                        </div>
                        <div className="human2">
                            <img src={human2} />
                            <span>Michale</span>
                        </div>
                        <div className="human3">
                            <img src={human3} />
                            <span>Ryan Gosling</span>
                        </div>
                        <div className="human4">
                            <img src={human4} />
                            <span>Domhnall</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Department;