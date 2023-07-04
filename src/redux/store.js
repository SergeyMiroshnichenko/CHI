import {combineReducers, createStore} from "redux"
import {persistStore} from "redux-persist"
import carsReducer from "./redusers/carsReducer"

const rootReducer = combineReducers({
    carsReducer
})

export const store = createStore(rootReducer)
export const persistor = persistStore(store)