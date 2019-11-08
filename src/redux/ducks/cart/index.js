import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

//action names
const GET_ITEMS = "cart/GET_ITEMS"
const ADD_TO_CART = "cart/ADD_TO_CART"
const REMOVE_ITEM = "cart/REMOVE_ITEM"

//reducer
const initialState = {
  items: [],
  subCart: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state, items: action.payload }
    case ADD_TO_CART:
      return { ...state, subCart: [...state.subCart, action.id] }
    case REMOVE_ITEM:
      return {
        ...state,
        subCart: state.subCart.filter(item => item !== action.payload)
      }
    default:
      return state
  }
}

//custom hooks
export function useCart() {
  const dispatch = useDispatch()
  const add = item => dispatch(addToCart(item))
  const remove = id => dispatch(removeItem(id))
  const items = useSelector(appState => appState.cartReducer.items)
  const subCart = useSelector(appState => appState.cartReducer.subCart)
  const fetch = () => dispatch(getItems())

  useEffect(() => {
    fetch()
  }, [])

  return { items, subCart, fetch, add, remove }
}

//actions
export function getItems() {
  return dispatch => {
    axios.get("/products").then(resp => {
      dispatch({
        type: GET_ITEMS,
        payload: resp.data
      })
    })
  }
}

export function addToCart(id) {
  return dispatch => {
    dispatch({
      type: ADD_TO_CART,
      id: id
    })
  }
}

export function removeItem(id) {
  return dispatch => {
    dispatch({
      type: REMOVE_ITEM,
      payload: id
    })
  }
}

///still working on converting
