function Footer(){
  const path = process.env.PUBLIC_URL;

  const moveTop = () => {
    window.document.documentElement.scrollTop = 0;
  }

    return (
      <>
        <footer>
          <div className="inner">
            <h3>FOLLOW THE GRAM</h3>
            <span>@BIGWOODNASHVILLE</span>
            <div className="line"></div>
            <ul className="wrap">
              <li><a href="#"><img src={`${path}/img/home_bg.jpg`} /></a></li>
              <li><a href="#"><img src={`${path}/img/slider5.jpg`} /></a></li>
              <li><a href="#"><img src={`${path}/img/footerPic1.jpg`} /></a></li>
              <li><a href="#"><img src={`${path}/img/slider2.jpg`} /></a></li>
              <li><a href="#"><img src={`${path}/img/footerPic2.jpg`} /></a></li>
              <li><a href="#"><img src={`${path}/img/slider11.jpg`} /></a></li>
            </ul>
            <div className="txtBox">
              <p>We create curated, beautifully handcrafted, authentic wood furniture & home decor that is both affordable and accessible to our customers.</p>
              <div className="gnb">
                <span className="email">BIGWOODNAH@GMAIL.COM</span>
                <a onClick={e => e.preventDefault()} href="#"><i className="fab fa-instagram"></i></a>
                <a onClick={e => e.preventDefault()} href="#"><i className="fab fa-facebook-f"></i></a>
                <a onClick={e => e.preventDefault()} href="#"><i className="fas fa-phone-alt"></i></a>
              </div>
            </div>
            <div className="pic">
                <img src={`${path}/img/footerPic3.png`} />
            </div>
            <a className="recieveBtn" href="#" onClick={e => e.preventDefault()}>RECEIVE A FREE QUOTE</a>

          </div>
        </footer>
        <div className="copy">
          <div className="inner">
            <p>2022 KIMSOOIN &copy; ALL RIGHTS RESERVED.</p>
            <span onClick={moveTop}>BACK TO TOP<i className="fas fa-chevron-up"></i></span>
          </div>
          
        </div>
        </>
    )
  }
  
  export default Footer;