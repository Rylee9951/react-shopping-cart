// const initialState = {
//   items: [],
//   subCart: []
// }

// export default function(state = initialState, action) {
//   switch (action.type) {
//     case 'GET_ITEMS':
//       return {...state, items: action.payload}
//     case 'ADD_TO_CART':
//       return {...state,
//          subCart: [...state.subCart, action.id]}
//     case 'REMOVE_ITEM':
//         return {
//           ...state,
//           subCart: state.subCart.filter(item => item !== action.payload)
//         }
//     default:
//       return state
//   }
// }

// //find other id to compare
// //then
