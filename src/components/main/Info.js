import { useEffect, useState, useRef } from "react";
import Anime from '../class/anime.js';

function Info(){
  const arr = ['slider1','slider2','slider3','slider4','slider5','slider6','slider7','slider8','slider9','slider10','slider11'];
  const path = process.env.PUBLIC_URL;
  let [names,setNames] = useState(arr);
  const [selected,setSelected] = useState(0);
  const totalSlide = arr.length - 3;
  const slideRef = useRef(null);
  const nextSlide = e => {
      e.preventDefault();

      if(selected >= totalSlide) {
          setSelected(0);
      }else {
          setSelected(selected + 1);
      }
  }
  const prevSlide = e => {
    e.preventDefault();

    if(selected === 0) {
      setSelected(totalSlide);
    }else {
      setSelected(selected - 1)
    }
  }

    useEffect(() => {
      slideRef.current.style.transition = `all 0.5s ease-in-out`;
      slideRef.current.style.transform = `
        translateX(-${selected}0%)
      `
    },[selected]);

    return (
      <section id="third">
        <div className="inner">
          <div className="slider">
            <ul ref={slideRef} className="pics">
              {
                names.map((data,index) => {
                  let imgSrc = `${path}/img/${data}.jpg`;
                  
                  return(
                    <li  className="selected" key={index} >
                      <div  className="pic">
                        <img src={imgSrc} />
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <a href="#" className="prevBtn" onClick={prevSlide}>←</a>
          <a href="#" className="nextBtn" onClick={nextSlide} >→</a>
          <h1>High Quality. Unique Interiors<br />And Furniture At A Fair Price</h1>
          <div className="line1"></div>
          <div className="line2"></div>
          <p>Each piece is customize to your request, and hand-crafted to your inspiration. Our pieces are made with high quality wood, <br />and materials
          sourced locally in Nashville, TN. Most custom pieces from blog name stores can be expensive and a long<br />
          turnover time - we strive on create affordable pieces in a reasonable timeframe. Our customer service allows our clients to<br />
          be a part of the entire design process to achieve a unique look in their home unlike any other.</p>
        </div>
      </section>
    )
  }
  
  export default Info;