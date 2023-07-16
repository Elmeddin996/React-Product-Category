import React from "react";
import Product from "./Product";
import { AppContext } from "../Context";

const Category = () => {
  const { setIsMouseLeave, setCategoryData, category, AllProductHandler} = React.useContext(AppContext);

  const MouseHover = (e) => {
    e.preventDefault();
    setCategoryData(`${e.target.innerHTML}`);
    setIsMouseLeave(true);
  };

  const MouseLeave = (e) => {
    e.preventDefault();
    setIsMouseLeave(false);
  };


  return (
    <>
      <div className="page-cont">
        <div className="col-lg-2">
          <ul className="nav navbar-nav card">
            <div className="card category-cont">
              <a onClick={AllProductHandler} className="links">All Products</a>
            </div>
            {category &&
              category.map((item) => {
                return (
                  <div key={item} className="card category-cont">
                    <a
                      onMouseEnter={MouseHover}
                      onMouseLeave={MouseLeave}
                      className="links"
                    >
                      {item}
                    </a>
                  </div>
                );
              })}
          </ul>
        </div>
        <Product />
      </div>
    </>
  );
};

export default Category;
