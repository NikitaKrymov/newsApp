import { AppError } from "./Interface";

export const FETCH_NEWS_DATA_REQUEST = 'FETCH_NEWS_DATA_REQUEST';
export const FETCH_NEWS_DATA_SUCCESS = 'FETCH_NEWS_DATA_SUCCESS';
export const FETCH_NEWS_DATA_FAILED = 'FETCH_NEWS_DATA_FAILED';

export const FETCH_DASHBOARD_NEWS_REQUEST = 'FETCH_DASHBOARD_NEWS_REQUEST';
export const FETCH_DASHBOARD_NEWS_SUCCESS = 'FETCH_DASHBOARD_NEWS_SUCCESS';
export const FETCH_DASHBOARD_NEWS_FAILED = 'FETCH_DASHBOARD_NEWS_FAILED';

export interface FetchNewsDataRequest {
    type: typeof FETCH_NEWS_DATA_REQUEST,
    payload: string
}

export interface FetchNewsDataSuccess {
    type: typeof FETCH_NEWS_DATA_SUCCESS,
    payload: any
}

export interface FetchNewsDataFailed {
    type: typeof FETCH_NEWS_DATA_FAILED,
    payload: AppError
}

export interface FetchDashboardNewsRequest {
    type: typeof FETCH_DASHBOARD_NEWS_REQUEST,
    payload: {
        content1: string,
        content2: string,
        content3: string,
        content4: string,
        content5: string
    }
}

export interface FetchDasboardNewsSuccess {
    type: typeof FETCH_DASHBOARD_NEWS_SUCCESS,
    payload: []
}

export interface FetchDashboardNewsFailed {
    type: typeof FETCH_DASHBOARD_NEWS_FAILED,
    payload: AppError
}

export type AppActions = FetchNewsDataFailed | FetchNewsDataRequest | FetchNewsDataSuccess | FetchDashboardNewsFailed | FetchDasboardNewsSuccess | FetchDashboardNewsRequest;