import {applyMiddleware, combineReducers, createStore} from "redux";
import {createLogger} from "redux-logger/src";
import thunk from "redux-thunk";
import photosReducer from "./photos";
import dataReducer from "./data";



const logger = createLogger({
    diff:true,
    collapsed:true
})

const rootReducer = combineReducers({
    photos: photosReducer,
    data:dataReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger))
export default store

