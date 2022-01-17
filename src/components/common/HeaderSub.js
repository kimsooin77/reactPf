import { NavLink } from "react-router-dom";



function HeaderSub() {
    const path = process.env.PUBLIC_URL;
    const logoPic = `${path}/img/secondPagePic.png`;
    return(
        <div className="subHead">
            <div className="inner">
                <div className="wrap">
                    <h1><NavLink exact to="/" ><img src={logoPic}  /></NavLink></h1>
        
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
            
                <ul id="gnbMo" >
                    <li><NavLink exact to="/" ><img src={logoPic}  /><span></span></NavLink></li>
                    <li><NavLink exact to="/department">Department</NavLink></li>
                    <li><NavLink exact to="/community">Community</NavLink></li>
                    <li><NavLink exact to="/gallery">Gallery</NavLink></li>
                    <li><NavLink exact to="/youtube">Youtube</NavLink></li>
                    <li><NavLink exact to="/location">Location</NavLink></li>
                    <li><NavLink exact to="/join">Join</NavLink></li>
                    <li><a href="#">X</a></li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderSub;