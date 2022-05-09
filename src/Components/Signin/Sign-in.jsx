import "./Sign-in.css"
import "../Signin/Sign-in.css"
import "../Homepage/NavBar"
import { Link } from "react-router-dom"

// import { NavLink } from "react-router-dom"
import { NavBar } from "../Homepage/NavBar"
import { Footer } from "../Homepage/Footer"

export const SignIn = () => {
    return (
        <>
            <NavBar />

            <div className="b1">

                <form className="f1" >
                    <div className="CA">
                        <h4>Sign In</h4>
                        <p >Sign in to your Kohls.com account to shop, <br />check out or track your order.</p>
                    </div>
                    <div className="input-div">
                        <h5>Email Address</h5>
                        <input type="email" name="email" required={true} />
                        <h5>Password</h5>
                        <input type="password" name="password" required={true} />

                        <p className="belowC">Check this box to stay signed in on this device. <br />Recommended for devices that only you use.</p>
                        <input className="submit2" type="submit" value={"SIGN IN"} />
                    </div>



                </form>


                <div className="b2">

                    <div className="CA2">
                        <h4>Create Account </h4>
                        <p>With a Kohls.com account, enjoy exclusive, <br />benefits that make shopping faster and easier!</p>
                    </div>

                    {/* <div className="img4">
                        <span><img className="img2" src="https://www.kohls.com/account/media/42.0.0-693/images/login_list.png" alt="image" /></span> <span className="s1">Enjoy Express Checkout
                        </span> <br /><p className="c4"> See your Kohl's Rewards</p> <br /> <p className="c2">Print Kohl's Cash</p> <br />
                        <p className="c3">Track orders easily</p>

                    </div> */}

                    <div className="acc-img-div">
                        <div>
                            <img className="img2" src="https://www.kohls.com/account/media/42.0.0-693/images/login_list.png" alt="image" />
                        </div>
                        <div>
                            <ul>
                                <li>
                                    Enjoy Express Checkout
                                </li>
                                <li>
                                    See your Kohl's Rewards
                                </li>
                                <li>
                                    Print Kohl's Cash
                                </li>
                                <li>
                                    Track orders easily
                                </li>
                            </ul>
                        </div>
                    </div>










                    <Link to="/signup">
                        <button className="btn" onClick={() => {

                        }} > CREATE ACCOUNT</button>
                        </Link>



                    {/* <button className="btn" onClick={() => {
                        <NavLink to="/signn"></NavLink>
                    }} > CREATE ACCOUNT</button> */}



                </div>

            </div>

            <Footer></Footer>
        </>
    )
}