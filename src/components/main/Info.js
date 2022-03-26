import { useEffect, useState, useRef } from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation} from "swiper";
import "swiper/css/navigation";
import 'swiper/css';


function Info(){
  const arr = ['slider1','slider2','slider3','slider4','slider5','slider6','slider7','slider8','slider9','slider10','slider11'];
  const path = process.env.PUBLIC_URL;
  let [names,setNames] = useState(arr);
  

    return (
      <section id="third">
        <div className="inner">
          <div className="slider">
            <Swiper
            modules={[EffectCoverflow, Autoplay, Navigation]}
            effect={"coverflow"}
            grabCursor={true}
            autoplay={true}
            navigation={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate : 50,
              stretch : 0,
              depth : 100,
              modifier : 1,
              slideShadows : false
            }}
            className="pics"
            >
              {
                names.map((data,index) => {
                  let imgSrc = `${path}/img/${data}.jpg`;
                  
                  return(
                    <SwiperSlide  className="selected" key={index} >
                      <div  className="pic">
                        <img src={imgSrc} />
                      </div>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
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