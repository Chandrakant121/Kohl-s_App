import "../Homepage/NavBarmid.css"

export const NavBarmid = () => {
    return (<>
        <div style={{ cursor: "pointer", backgroundColor: "black", marginTop: "40px", }}>
            <div style={{ marginLeft: "", width: "480px", margin: "auto" }}>

                <div style={{ display: "flex", textAlign: "center" }}>
                    <div >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThwNhLmgk2N9jdbBmIzoOPQOlor8VVMEAcnbkNLu8kpFJXaPkSZ4KzsWzKiyTgL3mhFhk&usqp=CAU" style={{ height: "65px" }} alt="" />

                    </div>

                    <div style={{ fontSize: "30px", marginTop: "13px", marginLeft: "20px", color: "white", fontWeight: "800" }}> FREE SHIPPING</div>

                    <div style={{ fontSize: "16px", marginTop: "28px", fontWeight: "500", marginLeft: "10px", color: "white" }}>with a $49 purchase.</div>
                </div>

            </div>
        </div>


        <div className="kohls-rew" style={{ position: "relative" }}>

            <div style={{ marginTop: "20px", cursor: "pointer" }}>
                <img src="https://media.kohlsimg.com/is/content/kohls/hp2-d-20220502-rewards-kc" alt="" style={{ width: "100%", height: "250px" }} />

                <img className="kohls-rew-img2" src="https://retailsorted.co.za/DBFile/Image/55675e65-ff85-4920-a19e-36b3cb83039f/image " alt="" />

                <span className='kohls-rew-p' >Members now <b>earn 50% more rewards</b> with a Kohl's Card.</span>

                <span className='kohls-rew-p2'>
                    Earn 7.5% rewards when you use a Kohl's Card or 5% any other way you pay. <br />
                </span>

                <span className='member-now' > <b>Not a member? <a href="">Enroll Now</a></b></span>


            </div>

        </div>
    </>)
}