import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './reducer'

const store= configureStore({
    reducer:{
        products:productsSlice
    }
})

export default store;