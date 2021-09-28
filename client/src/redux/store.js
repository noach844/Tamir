import { configureStore } from '@reduxjs/toolkit'
import  currencyReducer from './currency'
import  itemsReducer from './items'

const store = configureStore({
    reducer: {
        currencyReducer:currencyReducer,
        itemsReducer:itemsReducer
    },
})


export default store