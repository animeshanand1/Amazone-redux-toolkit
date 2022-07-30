import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShopOutlined";

function Products({ id, title, image, price, specification, rating, detail}) {
  return (
    <div className="product">
      <div className="info">
        <Link to={`/products/${id}`} className="title">
          | <p>{title}</p>
        </Link>
        <p className="price">
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
        </div>
        <img src={image} />
        <button>
          <i>
            <ShoppingCartOutlinedIcon />
          </i>
          Add To Basket
        </button>
      
    </div>
  );
}

export default Products;
