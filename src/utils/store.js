import { createStore, applyMiddleware } from 'redux'

import reducer from '../reducers'
import enhancers from '../middlewares'

export default (initialState = null) => 
    createStore(
        reducer,
        initialState,
        enhancers
    )
