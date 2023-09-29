
import {configureStore } from "@reduxjs/toolkit"
import stringReducer from './slices/string'

const store = configureStore({
    reducer: {
        stringChanger: stringReducer
    }
})

export default store