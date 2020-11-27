import { FETCH_DASHBOARD_NEWS_FAILED, FETCH_DASHBOARD_NEWS_REQUEST, FETCH_DASHBOARD_NEWS_SUCCESS, FETCH_NEWS_DATA_FAILED, FETCH_NEWS_DATA_REQUEST, FETCH_NEWS_DATA_SUCCESS } from "../types/AppActionsTypes";
import { AppError } from "../types/Interface";

export const fetchNewsRequest = (param: string) => ({
    type: FETCH_NEWS_DATA_REQUEST,
    payload: param
});

export const fetchNewsSuccess = (data: any) => ({
    type: FETCH_NEWS_DATA_SUCCESS,
    payload: data
});

export const fetchNewsFailed = (error: AppError) => ({
    type: FETCH_NEWS_DATA_FAILED,
    payload: error
});

export const fetchDashboardNewsRequest = (param1: string, param2: string, param3: string, param4: string, param5: string,) => ({
    type: FETCH_DASHBOARD_NEWS_REQUEST,
    payload: {
        content1: param1,
        content2: param2,
        content3: param3,
        content4: param4,
        content5: param5,
    }
});

export const fetchDashboardNewsSuccess = (articles: any[]) => ({
    type: FETCH_DASHBOARD_NEWS_SUCCESS,
    payload: articles
});

export const fetchDashboardNewsFailed = (error: AppError) => ({
    type: FETCH_DASHBOARD_NEWS_FAILED,
    payload: error
});