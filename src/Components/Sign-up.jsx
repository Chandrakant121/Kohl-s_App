import { useState } from "react"
import "./Sign-up.css"

export const Signup = () => {
    const [user, setUser] = useState({
      username:"" , last:"" ,  email:"" ,password:""
    })
    let name ,value;
    const handleChange=(e)=>{
    name = e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value})
    }
  


    
    return (
        <>
            <form >
                <div className="main">

                <div className="CA">
                    <h4>Create Account</h4>
                    <p>By creating an account, you agree to Kohl's Security & Privacy Policy and Legal Notices.</p>

                </div>
                <div className="fName">
                    <div className="fzk">
                        <h4>First Name</h4>
                        <input type="text" name="username" value={user.name} onChange={handleChange} required={true} />
                    </div>
                    <div className="fzk">
                        <h4>Last Name</h4>
                        <input type="text" name="last" value={user.last} onChange={handleChange} required={true} />
                    </div>

                </div>
                <div className="fName">
                    <div className="fzk">
                        <h4>Email Address</h4>
                        <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="name@mail.com" required={true} />
                    </div>
                    <div className="fzk">
                        <h4>Password</h4>
                        <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="should not be same as email or login" required={true} />
                    </div>

                </div>
                <div className="sName">

                    <input className="check" type="checkbox" required={false} />
                    <p className="p">keep me signed in</p>
                </div>

                <div className="common">


                <p className="para">Check this box to stay signed in on this device <br />
                    Recommended for devices that only you use.</p>
                    </div>
                <hr />
                <div className="img">

                <img  src="https://www.kohls.com/account/media/42.0.0-693/images/loyaltyV2/kohls-rewards-horizontal.png" alt="kohl's" />
                </div>
                <hr />

                 <div className="q">
                <input type="Submit" value="CREATE ACCOUNT" className="submit" />
                </div>
                </div>
            </form>
        </>
    )
}