import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './userSlice'
import stock from './stockSlice'

export default configureStore({
    reducer: {
        user: user.reducer,
        stock: stock.reducer
    }
})