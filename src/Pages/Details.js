import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  async function getData() {
    await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <Link className="back-icon__elem" to="/">
        <span >Back To Home</span>
      </Link>
      <div className="details row">
        <div className="col-lg-6">
          <img src={product.image} alt="" />
        </div>
        <div className="col-lg-6 g-4">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <button className="btn btn-primary w-50">{product.price} AZN</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
