function Join() {
    return(
        <div id="join">
            <div className="inner">
                <div className="pic">

                </div>
                <h2>REQUEST A CUSTOM PIECE</h2>
                <p className="p1">We can't wait to hear more about your vision! We'll send you in an email within a few business days with a quote to get started.</p>
                <a href="#" className="message"><i className="fas fa-envelope"></i>blgwoodnash@gmail.com</a>
                <a href="#" className="phone"><i className="fas fa-phone-alt"></i>847-767-2126</a>
                <span>PAYMENT & CANCELLATION POLICIES</span>
                <p className="p2">
                We require a 50% deposit to start production on a piece, which is non-refundable. Remaining balance is due upon delivery or pickup. You may cancel your piece at any time, but once production has started we cannot use your deposit towards another piece as the materials and supplies have already been purchased. 
                </p>

                <div className="wrap">
                    <input type="text" name="name" placeholder="FIRST AND LAST NAME" />
                    <input type="text" name="address" placeholder="EMAIL ADDRESS" />
                    <input type="text" name="number" placeholder="PHONE NUMBER" />
                    <input type="text" name="interested" placeholder="TYPE OF PIECE INTERESTED IN?" />
                    <input type="text" name="dimensions" placeholder="DESIRED DIMENSIONS" />
                    <textarea type="text" name="comments" placeholder="QUESTIONS / COMMENTS" />
                    <a href="#">SUBMIT YOUR INQUIRY</a>
                </div>
            </div>
            
        </div>
    )
}

export default Join;