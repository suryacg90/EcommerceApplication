import React, { useState } from "react";
import product1 from "./images/product11.jpg";
import product2 from "./images/product2.jpg";
import product3 from "./images/product3.jpg";
import product4 from "./images/product4.jpg";
import product5 from "./images/product5.jpg";
import product6 from "./images/product6.jpg";
import product7 from "./images/product7.jpg";
import product8 from "./images/product8.jpg";
import product9 from "./images/product9.jpg";
import ProductComponent from "./ProductComponent";
import "./styles/ParentComponent.css";

function ParentComponent(props) {

    const {isNextPage} = props;

    const [getIsNextPage, setIsNextPage] = useState(isNextPage)

  const productList1 = [
    {
      title: "Brown eggs",
      type: "dairy",
      description: "Raw organic brown eggs in a basket",
      url: product1,

      price: 28.1,
      rating: 4,
    },
    {
      title: "Sweet fresh stawberry",
      type: "fruit",
      description: "Sweet fresh stawberry on the wooden table",
      url: product2,

      price: 29.45,
      rating: 4,
    },
    {
      title: "Fresh red apples",
      type: "fruit",
      description: "Fresh red apples in a basket",
      url: product3,

      price: 19.45,
      rating: 5,
    },
    {
      title: "Ripe avocados",
      type: "fruit",
      description: "Ripe yellow avocados",
      url: product4,

      price: 19.45,
      rating: 5,
    },
    {
      title: "Wine grapes",
      type: "fruit",
      description: "Red fresh wine grapes",
      url: product5,

      price: 19.45,
      rating: 5,
    },
    {
      title: "Fresh lemons",
      type: "fruit",
      description: "Fresh yellow lemons",
      url: product6,

      price: 19.45,
      rating: 5,
    },
  ];

  const productList2 = [
        {
          title: "Big onions",
          type: "vegetables",
          description: "Raw organic big onions",
          url: product7,
    
          price: 28.1,
          rating: 4,
        },
        {
          title: "Red tomatoes",
          type: "vegetable",
          description: "Fresh tangy tomatoes",
          url: product8,
    
          price: 29.45,
          rating: 4,
        },
        {
          title: "Ripe kiwi",
          type: "fruit",
          description: "Fresh tangy green kiwi",
          url: product9,
    
          price: 19.45,
          rating: 5,
        }]

        const nextPage = () =>{
            setIsNextPage(true)
            return true
        }

        const prevPage = () =>{
            setIsNextPage(false)
            return false
        }

  return (
    <>
      <div className="title">
        <br />
        <br />
        <br />
        <span className="super">Grocery Store.&nbsp;&nbsp;&nbsp;</span>
        <br />
        <span className="sub">
          One stop shop for all your kitchen
          needs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </div>
      <br />
      <br />
      <div className="products">
{console.log(productList2, getIsNextPage)}
          {
          getIsNextPage ? 
        (productList2.map((product2) => (          
          <ProductComponent
            img={product2.url}
            name={product2.title}
            description={product2.description}
          />
        ))) :
        (productList1.map((product1) => (
            <ProductComponent
              img={product1.url}
              name={product1.title}
              description={product1.description}
            />
          )))}

          {console.log(productList2, getIsNextPage)}

      </div>
      <button className='route' onClick={nextPage}>NEXT</button>&nbsp;&nbsp;
      <button className='route' onClick={prevPage}>PREV</button>
        <br /><br />
    </>
  );
}

export default ParentComponent;
