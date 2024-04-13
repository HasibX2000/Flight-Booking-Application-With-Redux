import { configureStore } from '@reduxjs/toolkit'
import bookingReducer from './bookingReducer'

const store = configureStore({
    reducer: bookingReducer
})

export default store