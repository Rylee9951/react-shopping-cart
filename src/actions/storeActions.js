import store from '../store'
import axios from 'axios';


export function getItems(){
  axios.get('/products').then(resp => {
    store.dispatch({
      type: 'GET_ITEMS',
      payload:resp.data 
    })
  })
}

export function addToCart(id){
  store.dispatch({
    type: 'ADD_TO_CART',
    id: id
  })
}

export function removeItem(id) {
  store.dispatch({
    type: 'REMOVE_ITEM',
    payload: id
  })
}

