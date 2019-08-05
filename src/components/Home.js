import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getItems, addToCart } from '../actions/storeActions';
import 'semantic-ui-css/semantic.min.css'
import { Button, Menu, Sidebar } from 'semantic-ui-react'
import Cart from './Cart'

const Home = (props) => {
  const items = useSelector(appState => appState.items )
  const subCart = useSelector(appState => appState.subCart)
  const [itemCount, setItemCount] = useState(0) 
  const [visible, setVisible] = useState(false)
  
  
  useEffect(() => {
    getItems() 
    setItemCount(subCart.length)
  }, [subCart]);

  return ( 
    <div id='appContainer'>
      <Button  
        icon='shop'
        onClick={e => !visible ? setVisible(true): setVisible(false) } 
        className='cart' 
        secondary
      />
      <div className='cartCount'>{itemCount}</div>
      <Sidebar.Pushable >
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            vertical
            visible={visible}
            direction='right'
            id='sidebar'
          >
            <Cart  />
          </Sidebar>

          <Sidebar.Pusher>
            
            <div id='itemsContainer'>
              {items.map(item => (
                <div key={item.id} className='itemContainer'>
                  <div className={item.isFreeShipping ? `shipping` : 'noShipping'}>{item.isFreeShipping ? `Free Shipping` : ''}</div>
                  <img className='image' src={`/assets/${item.sku}_1.jpg`} alt={item.title}/>
                  <p className='title'>{item.title}</p>
                  <div className='border'></div>
                  <p className='price'>{`${item.currencyFormat} ${(item.price).toFixed(2)}`}</p>
                  <p className='installments'>{`or ${item.installments} x${item.currencyFormat}${(item.price/item.installments).toFixed(2)}`}</p>
                  <button onClick={e => addToCart(item.id)} className='addButton'>Add to cart</button>
                </div>
              ))}
            </div>
           
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      
    </div>
   );
}
 
export default Home;