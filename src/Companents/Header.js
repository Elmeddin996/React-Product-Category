import React from "react";
import { AppContext } from "../Context";


const Header = () => {
  const {setItem, product} = React.useContext(AppContext);
  
  const SearchHandler = (e) => {
    const filtered = product.filter((product) =>
      product.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setItem(filtered);
  };

  return (
    <div className='header'>
    <h1>Header Logo</h1>

    <input
        onChange={SearchHandler}
        placeholder="Search Product"
        className="my-2 w-50"
      />
    </div>
  )
}

export default Header