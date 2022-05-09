import "../Homepage/Footer.css"
export const Footer = () => {

    const customerService = ["Contact Us", "Shipping", "Returns", "Rebates", "Recals", "Product Guides", "Kohl's Blog", "Khol's Cash"];

    const shopkohl = ["15% off sign up", "Site Map", "Store Locator", "Gift Cards", "Kohl’s Coupons"]

    const account = ["Sign In", "My Account", "Update Password", "Order Status", "Rewards", "Gift Card Balance"]

    const card = ["Benefits", "Pay & Manage Card", "Apply for a Kohl’s Card", "See if you prequalify"]

    const about = ["Community", "Diversity & Inclusion", "Sustainability", "Careers", "Apply for Seasonal Jobs", "Associate Services", "Investor Relations", "Affiliate Program", "Advertise with Us"]
    return (
        <>
            <div className="footer-main">

                <div className="footer-img">
                    <h4>Contact With <br /> Us</h4>
                    <img src="https://thumbs.dreamstime.com/b/black-white-facebook-logo-icon-high-resolution-black-white-facebook-logo-white-background-vector-eps-file-available-175771686.jpg" alt="" />
                    <img src="https://seeklogo.com/images/T/twitter-icon-circle-black-logo-35827D553B-seeklogo.com.png" style={{ height: "30px" }} alt="" />
                    <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" style={{ height: "30px" }} alt="" />
                    <img src="https://cdn-icons-png.flaticon.com/512/152/152810.png" style={{ height: "30px" }} alt="" />
                    <span></span>
                    <h4>Get Our <br /> App</h4>
                    <img src="https://i.pinimg.com/originals/a8/69/40/a86940a4ed8a69539b341f3c414c47b3.png" style={{ height: "70px" }} alt="" />
                    <h5>Scan the code to download <br />
                        the Kohl’s App today. <br />
                        <button>Learn More</button>
                    </h5>
                </div>



                <div className="footer" >

                    <div className="footer-a">
                        <div>
                            <h5>CUSTOMER SERVICE{" "}</h5>
                            {customerService.map((e) => {
                                <h3> Customer Service</h3>
                                return (<ul>
                                    <a href="">
                                        <li>{e}</li>
                                    </a>
                                </ul>)
                            })}
                        </div>

                        <div>
                            <h5>SHOP KOHL’S</h5>
                            {shopkohl.map((e) => {
                                <h3> Customer Service</h3>
                                return (<ul>
                                    <a href="">
                                        <li>{e}</li>
                                    </a>
                                </ul>)
                            })}
                        </div>

                        <div>
                            <h5>MY ACCOUNT</h5>
                            {account.map((e) => {
                                <h3> Customer Service</h3>
                                return (<ul>
                                    <a href="">
                                        <li>{e}</li>
                                    </a>
                                </ul>)
                            })}
                        </div>



                        <div>
                            <h5>KOHL’S CARD</h5>
                            {card.map((e) => {
                                <h3> Customer Service</h3>
                                return (<ul>
                                    <a href="">
                                        <li>{e}</li>
                                    </a>
                                </ul>)
                            })}
                        </div>

                        <div>
                            <h5>ABOUT KOHL’S</h5>
                            {about.map((e) => {
                                <h3> Customer Service</h3>
                                return (<ul>
                                    <a href="">
                                        <li>{e}</li>
                                    </a>
                                </ul>)
                            })}
                        </div>
                    </div>

                </div>

                {/* ============================================ */}

                <div className="footer-info">

                    <p>© 2022 Kohl’s, Inc.</p>

                    <p>KOHL’S® and Kohl’s brand names are trademarks owned by KIN, Inc.</p>

                    <p> owned by KIN, Inc.</p>

                    <p style={{ marginTop: "15px", marginBottom: "8px" }}>Android, Google Play and the Google Play logo are trademarks of Google Inc. App Store is a service mark of Apple Inc.</p>

                    <a href="">
                        Legal Notices, Privacy Policy, California Privacy Policy, CA-Do Not Sell My Personal Information, About Our Ads, California Transparency in Supply Chains Act.
                    </a>


                </div>


            </div>
        </>
    )
}