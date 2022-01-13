function Footer(){
  const path = process.env.PUBLIC_URL;

    return (
      <>
        <footer>
          <div className="inner">
            <h3>FOLLOW THE GRAM</h3>
            <div className="line"></div>
            <span>@BIGWOODNASHVILLE</span>
            <ul className="wrap">
              <li><a href="#"><img src={`${path}/img/home_bg.jpg`} /></a></li>
              <li><a href="#"><img src={`${path}/img/slider5.jpg`} /></a></li>
              <li><a href="#"><img src={`${path}/img/footerPic1.jpg`} /></a></li>
              <li><a href="#"><img src={`${path}/img/slider2.jpg`} /></a></li>
              <li><a href="#"><img src={`${path}/img/footerPic2.jpg`} /></a></li>
              <li><a href="#"><img src={`${path}/img/slider11.jpg`} /></a></li>
            </ul>
            <p>We create curated, beautifully handcrafted, authentic wood furniture & home decor that is both affordable and accessible to our customers.</p>
            <div className="gnb">
              <span className="email">BIGWOODNAH@GMAIL.COM</span>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fas fa-phone-alt"></i></a>
            </div>
            <div className="pic">
              <img src={`${path}/img/footerPic3.png`} />
            </div>
            <a href="#">RECEIVE A FREE QUOTE</a>
          </div>
        </footer>
        <div className="copy">
          <div className="inner">
            <p>2022 DCODELAB &copy; ALL RIGHTS RESERVED.</p>
            <span>BACK TO TOP<i className="fas fa-chevron-up"></i></span>
          </div>
          
        </div>
        </>
    )
  }
  
  export default Footer;