import "./Sign-in.css"

import { Navigate } from "react-router-dom"

export const SignIn = () => {
    return (
        <>
            <div className="b1">

                <form className="f1" >
                    <div className="CA">
                        <h4>Sign In</h4>
                        <p >Sign in to your Kohls.com account to shop, <br />check out or track your order.</p>
                    </div>
                    <h5>Email Address</h5>
                    <input type="email" required={true} />
                    <h5>Password</h5>
                    <input type="password" required={true} />

                    <div className="sName2">

                        <input className="c1" type="checkbox" required={true} />
                        <p className="p2">keep me signed in</p>
                    </div>

                    <p className="belowC">Check this box to stay signed in on this device. <br />Recommended for devices that only you use.</p>
                    <input className="submit2" type="submit" value={"SIGN IN"} />


                </form>


                <div className="b2">

                    <div className="CA2">
                        <h4>Create Account </h4>
                        <p>With a Kohls.com account, enjoy exclusive, <br />benefits that make shopping faster and easier!</p>
                    </div>
                    <div className="img4">
                        <span><img className="img2" src="https://www.kohls.com/account/media/42.0.0-693/images/login_list.png" alt="image" /></span> <span className="s1">Enjoy Express Checkout 
                  </span> <br /><p className="c4"> See your Kohl's Rewards</p> <br /> <p className="c2">Print Kohl's Cash</p> <br />
                  <p className="c3">Track orders easily</p>
    
                    </div>

                    <button className="btn" onClick={() => {
                  <Navigate  to="/signin"></Navigate>

                    }} > CREATE ACCOUNT</button>



                </div>
            </div>


        </>
    )
}