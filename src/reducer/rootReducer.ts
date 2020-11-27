import { combineReducers } from "redux"

import appReducer from './appReducer';
import errorsReducer from "./errorReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    errors: errorsReducer    
})

export type AppState = ReturnType<typeof rootReducer>