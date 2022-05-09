// import axios from "axios";
import { useEffect, useState } from "react";
import "./Women.css";
import { Category } from "./Category"
// import { Link } from "react-router-dom"
import { Filter } from "./Filter"
import data from "../../../db.json"
import { NavBar } from "../Homepage/NavBar";
import { Footer } from "../Homepage/Footer";

export const WomenPage = ({ handleCartCount }) => {

  const [user, setUser] = useState([]);
  const [items, setItems] = useState([{}]);

  // useEffect(() => {
  //   axios.get("").then(({ data }) => {
  //     return setUser(data);
  //   });
  // }, []);
  // console.log(user);
  //   console.log("items", items);

  //   useEffect(() => {
  //     addItem();
  //   }, []);

  const addItem = () => {
    const add = localStorage.setItem("Items", JSON.stringify(items));
    console.log("add", add);
    setItems({
      ...items,
      add,
    });
  };

  //   let btn = document.querySelector(".btn").value;
  //   //   btn.addEventListener("click", addItem);
  //   console.log(btn);
  //   export const Form = () => {
  //     const [formData, setFormData] = useState({
  //         name: "",
  //         age: "",
  //         email: ""
  //     })

  //     //=============================
  //     const handleChange = (e) => {
  //         const { id, value } = e.target
  //         setFormData({
  //             ...formData,
  //             [id]: value
  //         })
  //     }

  return (
    <>
      <NavBar></NavBar>
      {/* <Category></Category> */}
      <Filter></Filter>

      <div className="right" style={{ justifyContent: "space-around" }}>
        <h1 className="headWomen" style={{ textAlign: "start" }}>
          Women's Dresses
        </h1>
        {data.map((e, i) => {
          return (
            <div className="flex">
              <div className="side">
                <img src={e.imageUrl} alt="" />
                <h3>{e.name}</h3>
                <h3 className="linethrough">${e.originalPrice}</h3>
                <h3>${e.price}</h3>
                <button
                  onClick={() => {
                    addItem();
                  }}
                  className="btn"
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Footer></Footer>
    </>
  )

};
