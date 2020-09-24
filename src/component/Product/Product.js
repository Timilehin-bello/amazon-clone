import React from "react";
import { useStatValue } from "../../contexts/StateProvider";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  const [, dispatch] = useStatValue();
  
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating
      }
    })
  }


  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="prduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span role='img' aria-label='star'>
                ⭐
              </span>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
