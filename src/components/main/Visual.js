function Visual(){
  const path = process.env.PUBLIC_URL;
  const secondPagePic = `${path}/img/secondPagePic.png`;
    return (
      <section id="visual">
        <div className="inner">
          <div className="wrap">
            <h2>Handmade Authentic<br />Wood Furniture & Home Decor</h2>
            <div className="line"></div>
            <div className="pic">
              <img alt="secondPagePic" src={secondPagePic}  />
            </div>
            <p>At Big Wood, our mission is to create curated, beautifully handcrafted,<br />authentic wood furniture and home decor that is both affordable and<br />accessible to our customers. All of our pieces ar made in the USA.</p>
            <a href="#">SEND US AN INQUIRY</a>
          </div>
          
        </div>
      </section>
    )
}
  
export default Visual;