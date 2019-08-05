import { createStore } from 'redux'

import exampleReducer from './reducers/storeReducer'

const store = createStore(exampleReducer)

export default store