import React from "react";
import "./Home.css";
import { products, headerItems } from "../../utils/ProductsData";
import Banner1 from '../../Banner-Images/Banner1.jpg'
import Banner3 from '../../Banner-Images/Banner3.jpg'
import Banner4 from '../../Banner-Images/Banner4.jpg'
import Banner5 from '../../Banner-Images/Banner5.jpg'
import Banner6 from '../../Banner-Images/Banner6.jpg'
import Slider from "../Slider/Slider";
import Products from "../Products/Products";
import Footer from "../Footer/Footer";
function Home() {
  const bannerImages=[Banner1,Banner3,Banner4,Banner4,Banner5,Banner6]
  return (
    <div>
      <div className="item-container">
        {headerItems && headerItems.map((item, index) => <p>{item}</p>)}
      </div>
      <div className="home">
        <div className="home-container">
          <Slider images={bannerImages}/>
          <div className="home-row">
            {products.slice(0,2).map((item)=>(<Products 
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image={item.image}
            specification={item.specification}
            detail={item.detail}/>))}
          </div>
          <div className="home-row">
            {products.slice(2,5).map((item)=>(<Products 
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image={item.image}
            specification={item.specification}
            detail={item.detail}/>))}
          </div>
          <div className="home-row">
            {products.slice(5,6).map((item)=>(<Products 
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image={item.image}
            specification={item.specification}
            detail={item.detail}/>))}
          </div>
          <div style={{ marginTop: "40px" }}><Footer/> </div>
        </div>
       
      </div>
    </div>
  );
}

export default Home;
