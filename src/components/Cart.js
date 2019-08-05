import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { removeItem } from '../actions/storeActions';

const Cart = (props) => {
  const items = useSelector(appState => appState.items )
  const subCart = useSelector(appState => appState.subCart)
  const cartSet = Array.from(new Set(subCart))
  const [subtotal, setSubTotal] = useState(0)
  
  
  const newCart = cartSet.map(i =>{
   return{ finalCart:items.find(item => item.id === i), 
    quantity:subCart.filter(itemId => itemId === i).length }
  })
  


  useEffect(() => {
    const amount =newCart.reduce((a,b) =>{ return a+(b.finalCart.price * b.quantity)}, 0)
    setSubTotal(amount.toFixed(2))
  }, [subCart, newCart]);

  
  return ( 
    <div className='cartContainer'>
      <div className='itemsCartContainer'>
        {newCart.map(item => (
          <div key={item.finalCart.id} className='cartItem'>
            <div className='cartLeft'>
              <div>
                <img className='cartImage' src={`/assets/${item.finalCart.sku}_2.jpg`} alt={item.finalCart.title}/>
              </div>
              <div className='cartMiddle'>
                <p className='cartTitle'>{item.finalCart.title}</p>
                <p className='cartStyle'>X | {item.finalCart.style}</p>
                <p className='cartQuantity'>Quantity: {item.quantity}</p>
              </div>
            </div>
            <div>
              <div className='delete' onClick={e => removeItem(item.finalCart.id)}><i className="fa fa-trash"></i></div>
              <p className='cartPrice'>${(item.quantity * item.finalCart.price).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className='subtotalContainer'>
          <p className='subtotalText'>Subtotal</p>
          <p className='subtotalAmount'>$ {subtotal}</p>
        </div>
        <button className='checkoutButton'>Checkout</button>
      </div>
    </div>
   );
}
 
export default Cart;