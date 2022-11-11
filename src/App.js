import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState(new Map());
  const [total, setTotal] = useState(0);
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const addToCart = (name, price) => {  
    // create a new map to hold the new cart state
    let newCart = new Map(cart);
    // if the item is already in the cart, increment the count
    if (newCart.has(name)) {
      newCart.set(name, newCart.get(name) + 1);
    } else {
      // otherwise, add the item to the cart with a count of 1
      newCart.set(name, 1);
    }
    console.log(newCart);
    // set the cart state to the new cart
    setCart(newCart);
    // set the total cost of the cart
    setTotal(total + price);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="bakery-container">
          <h2 className="header">Doodle Desserts</h2>
          <div className="bakery-items">
            {bakeryData.map((item, index) => (
              <BakeryItem 
                key={index}
                item={item}
                addToCart={addToCart}
              ></BakeryItem>
            ))}
          </div>
        </div>


        <div className="cart-container">
          <h2>Cart</h2>

          {/* if cart is empty, display message of empty cart */}
          {/* else display a receipt of count to name of item */}

          {cart.size === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div>
              {/* make each entry using the spread operator */}
              {[...cart].map(([name, count]) => (
                <p><b>{count}</b>x {name}</p>
              ))}

              {/* add break */}
              <hr className="rule"></hr>

              <h3>Total: ${total.toFixed(2)}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
