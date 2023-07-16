import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context";

const Product = () => {
  const { item } = React.useContext(AppContext);
  return (
    <div className="col-lg-10">
      {item.length > 0 ? (
        item.map((item) => {
          return (
            <div className="col-lg-3">
              <div className="card">
                <Link to={`/details/${item.id}`}>
                  <img className="card-img-top" src={item.image} alt="Card image"  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <Link to={`/details/${item.id}`} className="btn btn-primary">
                    {item.price}AZN
                  </Link>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h1 className="alert alert-danger w-50">No Content</h1>
      )}
    </div>
  );
};

export default Product;

