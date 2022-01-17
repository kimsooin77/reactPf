import { useRef, useState } from 'react';
import {NavLink} from 'react-router-dom';

function Header(){
    const path = process.env.PUBLIC_URL;
    const gnbMo = useRef(null);
    const logoPic = `${path}/img/logoPic.png`;
    const [isClose,setIsClose] = useState(false);
    const clickClose = e => {
      e.preventDefault();
      setIsClose(true);
      console.log(gnbMo.current.className);
    }
    return (
      <header>
        <div className="inner">
          <div className="wrap">
            <h1><NavLink exact to="/" ><img src={logoPic}  /><span>BIG WOOD</span></NavLink></h1>
  
            <ul id="gnb">
              <li><NavLink exact to="/department">Department</NavLink></li>
              <li><NavLink exact to="/community">Community</NavLink></li>
              <li><NavLink exact to="/gallery">Gallery</NavLink></li>
              <li><NavLink exact to="/youtube">Youtube</NavLink></li>
              <li><NavLink exact to="/location">Location</NavLink></li>
              <li><NavLink exact to="/join">Join</NavLink></li>
            </ul>
            <a href="#">
              <span>메뉴 호출</span>
            </a>
          </div>
          
        
          <ul id="gnbMo" ref={gnbMo} className={isClose ? "yes" : "no"} >
              <li><NavLink exact to="/" ><img src={logoPic}  /><span></span></NavLink></li>
              <li><NavLink exact to="/department">Department</NavLink></li>
              <li><NavLink exact to="/community">Community</NavLink></li>
              <li><NavLink exact to="/gallery">Gallery</NavLink></li>
              <li><NavLink exact to="/youtube">Youtube</NavLink></li>
              <li><NavLink exact to="/location">Location</NavLink></li>
              <li><NavLink exact to="/join">Join</NavLink></li>
              <li><a href="#" onClick={clickClose}>X</a></li>
            </ul>
        </div>
      </header>
    )
  }
  
  export default Header;