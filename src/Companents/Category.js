import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from 'axios';
const Category = () => {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [item, setItem]=useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data)
        setItem(res.data)
      })
      .catch((error) => console.log(error));
  },[]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories")
      .then((res) => setCategory(res.data))
      .catch((error) => console.log(error));
  }, []);

  const SearchHandler=(e)=>{
    const filtered = products.filter(product=>product.title.toLowerCase().includes(e.target.value.toLowerCase()))
    setItem(filtered)
  }

const MouseHover=(e)=>{
  e.preventDefault()
  axios.get(`https://fakestoreapi.com/products/category/${e.target.innerHTML}`)
      .then((res) => {
        setProducts(res.data)
        setItem(res.data)})
      .catch((error) => console.log(error));
}

const MouseLeave=(e)=>{
  e.preventDefault()
  axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data)
        setItem(res.data)})
      .catch((error) => console.log(error));
}

  return (
   <>
   <input onChange={SearchHandler} placeholder="Search Product" className="my-2 w-50"/>
     <div className="page-cont">
      <div className="col-lg-2">
        <ul className="nav navbar-nav card">
          {category &&
            category.map((item) => {
              return (
               <div key={item} className="card category-cont">
               <a  onMouseEnter={MouseHover} onMouseLeave={MouseLeave} className="links" href="">
                  {item}
                </a>
               </div>
              );
            })}
        </ul>
      </div>
      <div className="col-lg-10">
       {
       item.length>0 ? item.map((item) => {
         return(
          <Product key={item.title} item={item} />
         )
        }): <h1 className="alert alert-danger w-50">No Content</h1>
       }
      </div>
    </div>
   </>
  );
};

export default Category;
