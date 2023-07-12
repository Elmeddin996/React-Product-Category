import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const {item}=props
  return (
    <div className="col-lg-3">
     <div className="card">
     <Link to={`/details/${item.id}`}>
        <img className="card-img-top" src={item.image} alt="Card image" />
     </Link>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <Link to={`/details/${item.id}`} className="btn btn-primary">{item.price}AZN</Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
