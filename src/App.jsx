import { Home } from "./Components/Homepage/Home"
import { Routes, Route } from "react-router-dom"
import { SignIn } from "./Components/Signin/Sign-in"
import { SignUp } from "./Components/Signup/Sign-up"
import { WomenPage } from "./Components/Products/Women"


function App() {

  return (
    <div>
      {/* <Home></Home> */}


      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/signin" element={<SignIn />} ></Route>
        <Route path="/signup" element={<SignUp />} ></Route >
        <Route path="/womenpage" element={<WomenPage />} ></Route >
      </Routes>
    </div>
  )
}

export default App
