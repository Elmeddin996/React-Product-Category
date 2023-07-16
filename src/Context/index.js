import React from "react";
import axios from 'axios';


export const AppContext = React.createContext([]);

export const AppProvider = ({ children }) => {
  const [category, setCategory] = React.useState([]);
  const [item, setItem]= React.useState([]);
  const [product, setProduct]= React.useState([]);
  const [categoryData, setCategoryData]= React.useState('')
  const [isMouseLeave, setIsMouseLeave] = React.useState(false);

  React.useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories")
      .then((res) => setCategory(res.data))
      .catch((error) => console.log(error));
  }, []);

  React.useEffect(() => {
    let url = 'https://fakestoreapi.com/products'

    if (isMouseLeave) {
      url =`https://fakestoreapi.com/products/category/${categoryData}`
    }
    axios.get(url)
      .then((res) => {
        setItem(res.data)
        setProduct(res.data)
      })
      .catch((error) => console.log(error));
  },[isMouseLeave]);

  const AllProductHandler = (e)=>{
    e.preventDefault();
    setItem(product)
  }
  
  return (
  <AppContext.Provider 
  value={{item, setItem, categoryData, setCategoryData,setIsMouseLeave, category, product,AllProductHandler}}>
  {children}
  </AppContext.Provider>
  );
};
