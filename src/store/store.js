import { configureStore, getDefaultMiddleware, combineReducers} from "@reduxjs/toolkit"
import { reducer as userReducers } from "./slices/user.slice"

const reducers = combineReducers({
    user: userReducers,
})

export const store = configureStore({
    reducer: reducers
})