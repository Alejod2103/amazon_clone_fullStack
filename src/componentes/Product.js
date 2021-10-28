import React from 'react'
import { useStateValue } from '../StateProvider'
import "./Product.css"

function Product({id, tittle, image, price, rating}) {
     
const [{ basket }, dispatch] = useStateValue();
console.log('este es el basket >>>', basket)
const addToBasket = () => {
    dispatch({
        type: 'ADD_TO_BASKET',
        item: {
            id: id,
            tittle: tittle,
            image: image,
            price: price,
            rating: rating
        }
      });
     };

    return (
        <div className="product">
            <div className="productInfo">
              <p>{tittle}</p>
              <p className="productPrice">
                  <small>$</small>
                  <bold>{price}</bold>
              </p>
              <div className="productRating">
                  {Array(rating)
                  .fill()
                  .map((_, i) => (
                     <p>🌟</p> 
                  ))}

              </div>
            </div>

            <img className="productImages" src={image} alt="" />
            <button onClick={addToBasket}  className="productButton"><b>Agregar al carrito</b></button>

        </div>





        

    )
}

export default Product
