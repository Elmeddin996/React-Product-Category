import React from "react";

const Product = (props) => {
  const {item}=props
  return (
    <div className="col-lg-3">
      <div className="card">
        <img className="card-img-top" src={item.image} alt="Card image" />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <a className="btn btn-primary">{item.price}AZN</a>
        </div>
      </div>
    </div>
  );
};

export default Product;
