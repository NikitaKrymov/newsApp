import { AppActions, FETCH_NEWS_DATA_FAILED } from "../types/AppActionsTypes";
import { ErrorReducer } from "../types/ErrorReducer";

const INITIAL_STATE: ErrorReducer = {
    appError: ''
}

const errorReducer = (state = INITIAL_STATE, action: AppActions) => {
    switch(action.type){
        case FETCH_NEWS_DATA_FAILED: {
            return { ...state, appError: action.payload}
        }
        default:
            return INITIAL_STATE;
    }
}

export default errorReducer;
