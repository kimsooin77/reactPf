function Service() {
    const path = process.env.PUBLIC_URL;
    const servicePic1 = `${path}/img/servicePic1.png`;
    const servicePic2 = `${path}/img/servicePic2.png`;
    const servicePic3 = `${path}/img/servicePic3.png`;

    return(
        <section id="service">
            <div className="inner">
                <h1>OUR SERVICES</h1>
                <span>HOW IT WORKS</span>
                <article className="article1">
                    <div className="wrap">
                        <div className="pic">
                            <img src={servicePic1} />
                        </div>
                        <h3>CHOOSE YOUR PIECE</h3>
                        <p>You can choose from one of our pre-made designs and customize the dimensions, or send us design inspiration for us to create a fully custom piece for you. We create a variety of items - from benches, dining tables, tables, live edge pieces, beds & more.</p>
                    </div>
                </article>
                <article className="article2">
                    <div className="wrap">
                        <div className="pic">
                            <img src={servicePic2} />
                        </div>
                        <h3>PRODUCTION BEGINS</h3>
                        <p>Once the 50% deposit has been submitted, we will start production on your piece. Our pricing is provided upon a quote once we know the dimensions and materials of the piece that you’d like. You'll be apart of the entire design process during production!</p>
                    </div>
                </article>
                <article className="article3">
                    <div className="wrap">
                        <div className="pic">
                            <img src={servicePic3} />
                        </div>
                        <h3>READY FOR ITS NEW HOME</h3>
                        <p>Timeline is anywhere from 1-4 weeks depending on the piece chosen. After completion, we offer both delivery and local pickup in Nashville, as well as set up and installation. Your custom piece is now ready for its new home! </p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Service;