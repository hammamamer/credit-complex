import {createStore,combineReducers,applyMiddleware} from "redux";
import logger from "redux-logger";
import company from "./reducers/companyReducer"
import user from "./reducers/userReducer"
export default createStore(combineReducers
    (
    {
         company,
         user,
    })
    
    );
    
   