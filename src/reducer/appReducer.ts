import { AppActions, FETCH_DASHBOARD_NEWS_REQUEST, FETCH_DASHBOARD_NEWS_SUCCESS, FETCH_NEWS_DATA_REQUEST, FETCH_NEWS_DATA_SUCCESS } from "../types/AppActionsTypes";
import { AppReducer } from "../types/AppReducerInterface";

const INITIAL_STATE: AppReducer = {
    isLoading: true,
    newsData: [],
    initialNews: []
};

const appReducer = (state = INITIAL_STATE, action: AppActions) => {
    switch(action.type){
        case FETCH_NEWS_DATA_SUCCESS: {
            return {...state, newsData: action.payload, isLoading: false }
        }
        case FETCH_NEWS_DATA_REQUEST: {
            return {...state, newsData: [], isLoading: true}
        }
        case FETCH_DASHBOARD_NEWS_SUCCESS: {
            return { ...state, initialNews: action.payload, isLoading: false }
        }
        case FETCH_DASHBOARD_NEWS_REQUEST: {
            return {...state, isLoading: true }
        }
        default: 
            return state;
    }
}

export default appReducer;