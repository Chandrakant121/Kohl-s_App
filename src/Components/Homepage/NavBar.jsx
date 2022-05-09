import "../Homepage/navbar.css"

import { Link } from "react-router-dom"
// import { WomenPage } from "../Products/Women"

export const NavBar = () => {
    // const menu = ["Mother's Day", "Father's Day", "For the Home", "Women", "Womens Plus Size", "Juniors", "Beauty", "Men", "Men's Bit & Tall", "Shoes", "Kids & Toys"]
    return (
        <>
            <div className="navbar">

                <div className="navbarH">
                    <b>Fast & free</b> {" "}

                    <span className='mediumfont'>Store pickup!</span>{" "}

                    <a href="" className="details">details</a>{" "}

                    <b>Take 20% Off</b>{" "}

                    <span className='mediumfont'>online with code UGET20.</span>{" "}

                    <a href="" className="details">details</a>{" "}

                    <a href="" className='offhd'> <b>GET 15% off</b> </a>

                    <a href="" className='offh'>when you sign up for emails. </a>{" "}

                    <a href="" className="details">details</a>{" "}
                </div>

                {/* ================================================ */}

                <div className='navbarM'>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>

                        <div style={{ display: "flex" }}>
                            <Link to="/">
                                <img className='khol-logo' src="https://1000logos.net/wp-content/uploads/2018/08/Kohl%E2%80%99s-logo.png" alt="" />
                            </Link>

                            <input type="text" className='navbar-input' placeholder='What are you looking for today?' />
                        </div>


                        <div style={{ display: "flex", marginTop: "5px", cursor: "pointer" }}>
                            <div className='navbar_btn'>
                                <ul>
                                    <img src="https://cdn2.vectorstock.com/i/1000x1000/08/56/user-profile-login-or-access-authentication-icon-vector-28920856.jpg" style={{ height: "50px" }} alt="" />

                                    <a href="" style={{ textDecoration: "none", color: "black" }}><p className='nav-acc'>Account</p></a>
                                </ul>

                                <div className='submenu1'>
                                    <ul>

                                        <button>
                                            <Link to="/signin" style={{ textDecoration: "none", color: "white" }} >SIGN IN</Link>
                                        </button>
                                        <li>
                                            <Link to="/signup">CREATE ACCOUNT</Link>
                                            <img src="https://cdn3.iconfinder.com/data/icons/network-communication-vol-1-2/48/31-512.png" style={{ height: "22px", marginLeft: "8px" }} alt="" />
                                        </li>

                                        <li>
                                            Walllet
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2QpEqlqYGDYqnZVWMDz6c_ltDieD832pTY_vu46Ki5Cp72UOlcted20Zycrw5MofQ2FY&usqp=CAU" alt="" style={{ height: "22px", marginLeft: "8px" }} />

                                        </li>
                                        <li>
                                            Khol's Rewards
                                            <img src="https://www.kohls.com/snb/media/images/loyaltyV2/rewards-green.png" alt=""
                                                style={{ height: "22px", marginLeft: "8px" }} />

                                        </li>
                                        <li>

                                            My Khol's Card
                                            <img src="https://www.kohls.com/media/images/global-header-refresh-icons/kohls-charge.png" alt="" style={{ height: "21px", marginLeft: "8px" }} />
                                        </li>

                                    </ul>
                                </div>
                            </div>


                            <div>
                                <ul>
                                    <img src="https://t4.ftcdn.net/jpg/01/08/78/89/360_F_108788947_S2vAm9mpc9mTB55pabB9ccxQjuBltHPB.jpg" style={{ height: "60px", paddingLeft: "10px", marginRight: "20px" }} alt="" />
                                    <a href="" style={{ textDecoration: "none", color: "black" }} ><p></p></a>
                                </ul>
                            </div>
                        </div>

                    </div>






                </div>

                {/* ================================================ */}
                <div className='navbarB' style={{ display: "flex", justifyContent: "space-between" }} >

                    <div style={{ display: "flex", cursor: "pointer" }}>
                        <div className='navbar_btn2'>
                            <ul>
                                <img src="https://thumbs.dreamstime.com/b/menu-icon-vector-ui-concept-thin-line-illustration-editable-stroke-linear-sign-use-web-mobile-apps-logo-print-192160188.jpg" style={{ height: "45px", marginLeft: "14px" }} alt="" />

                                <div className='submenu2'>
                                    <ul>
                                        {/* // const menu = ["Mother's Day", "Father's Day", "For the Home", "Women", "Womens Plus Size", "Juniors", "Beauty", "Men", "Men's Bit & Tall", "Shoes", "Kids & Toys"] */}
                                        <Link to="/womenpage"> <li>Men</li></Link>

                                        <Link to="/womenpage"> <li>Women</li></Link>

                                        <Link to="/womenpage"> <li>Kids & Toys</li></Link>

                                        <Link to=""> <li>Mother's Day</li></Link>

                                        <Link to=""> <li>Father's Day</li></Link>

                                        <Link to=""><li>For the Home</li></Link>

                                        <Link to=""> <li>Womens Plus Size</li></Link>

                                        <Link to=""><li>Juniors</li></Link>

                                        <Link to=""> <li>Beauty</li></Link>

                                        <Link to=""> <li>Men's Bit & Tall</li></Link>

                                        <Link to=""> <li>Shoes</li></Link>



                                    </ul>
                                </div>

                                {/* {<div className='submenu2'>
                                    {menu.map((e) => {
                                        return (<ul>
                                            <a href="">
                                                <li>{e}</li>
                                            </a>

                                        </ul>)
                                    })}
                                </div>} */}


                            </ul>
                        </div>


                        <div className='nav-mid-text'>
                            shop by category
                        </div>






                        <span>
                            <img src="https://www.seekpng.com/png/detail/17-172555_free-star-filled-icono-transparent-background-star-png.png" style={{ height: "20px", marginLeft: "14px", marginTop: "12px" }} alt="" />
                            <span className='nav-mid-text' style={{ marginLeft: "5px" }}>
                                my store: Select Store
                            </span>
                        </span>






                    </div>



                    <div style={{ display: "flex", cursor: "pointer" }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxmS9A7EogHDKxqDrcePZtOetTlWR01V3vmg&usqp=CAU" alt="" style={{ height: "15px", marginRight: "6px", marginTop: "18px" }} />
                        <div className='nav-mid-text' style={{ marginRight: "35px" }}>
                            Kohl's Coupons
                        </div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREB10lE9-SgCT50on-aHlgD7cl8yHzz1E2z9DIrkmlWbCyw_GC9mbMmME6ZbF4jgcecAE&usqp=CAU" style={{ height: "15px", marginRight: "6px", marginTop: "18px" }} alt="" />
                        <div className='nav-mid-text' style={{ marginRight: "75px" }}>
                            Help
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}