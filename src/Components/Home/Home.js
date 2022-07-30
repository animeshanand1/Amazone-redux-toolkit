import React from "react";
import "./Home.css";
import {products,headerItems} from '../../utils/ProductsData'
function Home() {
  return (
    <div>
      <div className="item-container">
        {headerItems && headerItems.map((item, index) => <p>{item}</p>)}
      </div>
    </div>
  );
}

export default Home;
