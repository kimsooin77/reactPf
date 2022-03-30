import { useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faTruckPickup } from "@fortawesome/free-solid-svg-icons";
import { faSnowplow } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import textBox from './DepartmentInfo.js';

function Department() {
    const depart = useRef(null);
    const path = process.env.PUBLIC_URL;
    const mainPic = `${path}/img/mainPic.png`;
    const middlePic = `${path}/img/middlePic.png`;

    const partner1 = `${path}/img/partner1.png`;
    const partner2 = `${path}/img/partner2.png`;
    const partner3 = `${path}/img/partner3.png`;
    const partner4 = `${path}/img/partner4.png`;
    const partner5 = `${path}/img/partner5.png`;
    const partner6 = `${path}/img/partner6.png`;
    const pop = useRef(null);
    const frame = useRef(null);
    

    const [number, setNumber] = useState(0);
    const [members, setMembers] = useState([]);
    const [isClicked, setisClicked] = useState(false);
    const [years, setYears] = useState(textBox);
    const dots = useRef(null);

    const handleMotion = (number) => {
        setisClicked(false)
        handleBtn();
            
        if( number === 0) {
            setisClicked(true)
        }
        if ( number === 1){
            setisClicked(true)
        }
        if (number === 2 ){
            setisClicked(true)
        }
        if(number === 3) {
            setisClicked(true)
        }
        if(number === 4) {
            setisClicked(true)
        }
        
    }
    const handleBtn = () => {
        const btns = dots.current.querySelectorAll("li")

        for(let btn of btns) btn.classList.remove("on")
            btns[number].classList.add("on");
    }

    useEffect(() => {
        setNumber(0)
        handleMotion(0)
    },[])

    useEffect(() => {
        axios
        .get(`${path}/db/departments.json`)
        .then(json => {
            setMembers(json.data.data)
        });
    },[])
    

    return(
        <div id="department" ref={depart}>
            <div className="topPic">
                <aside ref={pop}>
                    <div className="top"></div>
                    <div className="right" ></div>
                    <div className="bottom" ></div>
                    <div className="left"></div>
                    <div className="topLeft"></div>
                </aside>
                        
                <p>Department</p>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, doloribus!</span>
            </div>

            <div className="inner" ref={frame}>
                <div className="contents">
                    <div className="teamInfo">
                        MEET OUR TEAM 
                        <div className="pic">
                            <FontAwesomeIcon icon={faPagelines} />
                        </div>
                    </div>
                    
                    <section className="peoples scrollOn">
                        {
                            members.map((item,index) => {
                                return(
                                    <article key={index} className="human">
                                        <img src={`${path}/img/${item.imgSrc}`} />
                                        <span>{item.name}</span>
                                    </article>
                                )
                            })
                        }
                    </section>
                </div>
                
                <div className="title">
                    <div className="pic">
                        <FontAwesomeIcon icon={faPagelines} />
                    </div>
                    <h1>OUR STORY</h1>
                    
                    <div className="storyBox">
                        <section className="boxIn">
                            <div className="txtBox">
                                <div className="wrap"> 
                                    {
                                        isClicked
                                        ?
                                        years.map((year,index) => {
                                            return(
                                                <article className={number === index ? "show" : null} key={index}>
                                                    <strong>{ years[index].year }</strong>  
                                                    <span>{ years[index].content }</span>
                                                </article>
                                            )
                                        })
                                        :
                                        null
                                    }
                                    
                                </div>
                                
                            </div>
                            <div className="years">
                                <ul className="dot" ref={dots}>
                                    <li onClick={() => {
                                        setNumber(0)
                                        handleMotion(0)
                                        }}><FontAwesomeIcon icon={faTree} /></li>
                                    <li onClick={() => {
                                        setNumber(1)
                                        handleMotion(1)
                                        }}><FontAwesomeIcon icon={faUserGroup} /></li>
                                    <li onClick={() => {
                                        setNumber(2)
                                        handleMotion(2)
                                        }}><FontAwesomeIcon icon={faScrewdriverWrench} /></li>
                                    <li onClick={() => {
                                        setNumber(3)
                                        handleMotion(3)
                                        }}><FontAwesomeIcon icon={faSnowplow} /></li>
                                    <li onClick={() => {
                                        setNumber(4)
                                        handleMotion(4)
                                        }}><FontAwesomeIcon icon={faTruckPickup} /></li>
                                </ul>
                                <strong>1957</strong>
                                <strong>1971</strong>
                                <strong>1988</strong>
                                <strong>1995</strong>
                                <strong>2016</strong>
                            </div>
                            <div className="mainPic">
                                <img alt="mainPic" src={mainPic} />
                            </div>
                        </section>
                    </div>
                </div>

                <section className="partners">
                    
                    <h1>PARTNERS</h1>
                    <div className="line"></div>
                    <div className="titPic">
                        <div className="pic">
                            <FontAwesomeIcon icon={faPagelines} />
                        </div>
                    </div>
                    <ul className="partner">
                        <li><img src={partner1} alt="" /></li>
                        <li><img src={partner2} alt="" /></li>
                        <li><img src={partner3} alt="" /></li>
                        <li><img src={partner4} alt="" /></li>
                        <li><img src={partner5} alt="" /></li>
                        <li><img src={partner6} alt="" /></li>
                    </ul>
                </section>
            </div>

            <section className="middleContent">
                <img alt="middlePic" src={middlePic} />
                <h1>We Buy Red Pine Poles, Softwood, Hardwood & Standing Timber!</h1>
                <span>Call now! (123) 456-7890</span>
            </section>
        </div>
    )
}

export default Department;