import persistReducer from "redux-persist/es/persistReducer"
import storage from 'redux-persist/lib/storage';
import { GET_CARS } from "../constans/cars";
 const allCarsInitialState = []


const carsReducer = (state = allCarsInitialState, action) => {
    switch (action.type) {
        case GET_CARS:
            return  action.payload    
        default: return state   
    }
}

const persistConfig = {
    key: "root",
    storage
}
export default persistReducer(persistConfig,carsReducer)
