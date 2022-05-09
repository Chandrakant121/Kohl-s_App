import "../Homepage/Shopping.css"


export const Shopping = () => {
    return (
        <>

            <div className='shop'>
                <h1>Shopping Made Easy.</h1>
            </div>
            {/* ===================================== */}

            <div className='shop-2'>

                <div className='subshop-1'>

                    <div className='subshop-1-a'>
                        <h1>Fast & Free <br /> Store Pickup</h1>
                        <h3>Get your order in 1 hour or less !</h3>
                        <a href="">details</a>
                    </div>

                    <div className='subshop-1-b'>
                        <div>
                            <img src="https://t4.ftcdn.net/jpg/03/32/56/67/360_F_332566713_q0QLBQ0BWkG5ed7DGRiuFIjvZNwEL9k2.jpg" style={{ height: "85px" }} alt="" />
                            <h2 >Contactless <br />
                                Drive Up</h2>{" "}
                        </div>
                        <div>
                            <img src="https://www.pngitem.com/pimgs/m/33-338317_akf0049-shopping-trolley-icon-cute-shopping-cart-icon.png" style={{ height: "85px" }} alt="" />
                            <h2>In-Store <br />
                                Pickup</h2>
                        </div>
                    </div>

                </div>



                <div style={{ display: "grid" }}>

                    <div className='subshop-2'>

                        <div className='subshop-2-a'>
                            <img style={{ height: "80px" }} src="https://thumbs.dreamstime.com/b/simple-vector-filled-flat-amazon-icon-logo-solid-black-pictogram-isolated-white-background-amazon-logo-159029074.jpg" alt="" />
                            <h2>Easy Returns</h2>
                            <p>We'll pack it <br /> & ship it for free.</p>
                            <a href="">Learn More</a>
                        </div>
                        <div className='subshop-2-a'>
                            <img style={{ height: "80px" }} src="https://media.kohlsimg.com/is/image/kohls/hp2-dm-2020w1226-rewardsplate" alt="" />
                            <h2>
                                More Rewards</h2>
                            <p>with a Kohl's Card.

                            </p>
                            <a href="">Learn More</a>
                        </div>
                    </div>



                    <div className='subshop-2'>

                        <div className='subshop-2-a'>
                            <img style={{ height: "80px" }} src="https://media.kohlsimg.com/is/image/kohls/hp2-dm-20211105-appicon" alt="" />
                            <h2>The Kohl's App</h2>
                            <p>
                                You'll never shop <br />
                                the same again.</p>
                            <a href="">Learn More</a>
                        </div>
                        <div className='subshop-2-a'>
                            <img style={{ height: "80px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIiD5mT-PD9thn1KAJq0X9_SewDQDg24wuVA&usqp=CAU" alt="" />
                            <h2>Gift Cards</h2>
                            <p>Always the perfect fit.</p>
                            <a href="">Shop Gift Cards</a>
                        </div>
                    </div>
                </div>

                {/* ======================================== */}
            </div>


            <div className='shop' style={{ backgroundColor: "whitesmoke", padding: "20px" }}>
                <h3>Have a Kohl's Return? It's quick & hassle-free!
                    <a href="" style={{ fontSize: "14px", color: "black", marginLeft: "5px" }}>Learn More</a>
                </h3>
            </div>

            <div className='kohls-find'>
                <img src="https://media.kohlsimg.com/is/image/kohls/hp2-d-20220505-social-bkg" alt="" />

                <h3 >#KohlsFinds.</h3>
                <h1>GET INSPIRED</h1>
                <div>
                    <a href="">View Style Stories</a>

                </div>

            </div>



            <div className='community'>
                {/* add img  */}
            </div>


            <div className='para-kohl'>
                <p>
                    *Earn amount of Kohl's Cash® is approximate and may vary if additional coupons are applied to the purchase transaction. Details & exclusions apply. <br />
                    PRICE is approximate, requires that all terms of the offer(s) have been met, and may vary if additional discounts are applied to the purchase transaction and/or if more items are added to your cart. Pricing, promotions and merchandise availability may vary by location and at Kohls.com. “Sale” prices and percentage savings offered are discounts from Kohl's Regular (Reg.) or Original (Orig.) prices, and are valid on selected styles of merchandise unless otherwise indicated. The Reg. or Orig. price of an item is the former or future offered price for the item or a comparable item by Kohl's or another retailer. Actual sales may not have been made at the Reg. or Orig. prices, and intermediate markdowns may have been taken. Orig. prices may not have been in effect during the past 90 days or in all trade areas. Merchandise could be offered at the same or lower “Sale” prices during future promotional events beginning on or after the last day of this advertised event. The following merchandise are excluded from “Entire Stock” promotions in this advertisement: Clearance, Kohl's Cares® cause or other charitable items, Licensed Team, Sephora at Kohl's, emerging brands and Kohl's Online-Exclusive items. In some events, actual savings may exceed the percent savings shown. KOHL'S® and KOHL'S brand names are trademarks of KIN, Inc. ©2022 Kohl's, Inc. With respect to certain Price Break merchandise featured in this advertisement, the "previous sale" price represents sale prices recently advertised in Kohl's print advertising.


                </p>
            </div>
        </>
    )
}