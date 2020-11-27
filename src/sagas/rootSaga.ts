import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchDashboardNewsFailed, fetchDashboardNewsSuccess, fetchNewsFailed, fetchNewsSuccess } from '../actions';
import { FetchDashboardNewsRequest, FetchNewsDataRequest, FETCH_DASHBOARD_NEWS_REQUEST, FETCH_NEWS_DATA_REQUEST } from '../types/AppActionsTypes';
import axios from 'axios';

function* fetchNews(action: FetchNewsDataRequest) {
    const response = yield call(() => axios.get(`http://newsapi.org/v2/everything?q=${action.payload}&from=2020-10-22&sortBy=publishedAt&apiKey=3f5c5ae68846479994be568b4e65bec1`));
    yield put(fetchNewsSuccess(response.data.articles));
    console.log(response.data.articles)
    if (response.data.articles.length) {
        yield put(fetchNewsSuccess(response.data.articles));
    } else {
        yield put(fetchNewsFailed({
            message: 'Failed to fetch Data'
        }));
    }
}

function* fetchDashboardNews(action: FetchDashboardNewsRequest){
    const articles1 = yield call(() => axios.get(`http://newsapi.org/v2/everything?q=${action.payload.content1}&from=2020-10-22&sortBy=publishedAt&apiKey=3f5c5ae68846479994be568b4e65bec1`));
    const articles2 = yield call(() => axios.get(`http://newsapi.org/v2/everything?q=${action.payload.content2}&from=2020-10-22&sortBy=publishedAt&apiKey=3f5c5ae68846479994be568b4e65bec1`));
    const articles3 = yield call(() => axios.get(`http://newsapi.org/v2/everything?q=${action.payload.content3}&from=2020-10-22&sortBy=publishedAt&apiKey=3f5c5ae68846479994be568b4e65bec1`));
    const articles4 = yield call(() => axios.get(`http://newsapi.org/v2/everything?q=${action.payload.content4}&from=2020-10-22&sortBy=publishedAt&apiKey=3f5c5ae68846479994be568b4e65bec1`));
    const articles5 = yield call(() => axios.get(`http://newsapi.org/v2/everything?q=${action.payload.content5}&from=2020-10-22&sortBy=publishedAt&apiKey=3f5c5ae68846479994be568b4e65bec1`));
    if (articles1.data.articles.length > 0) {
        console.log(articles5.data.articles)
        const dashboardArticlesArray = [articles1.data.articles[0], articles2.data.articles[0], articles3.data.articles[0], articles4.data.articles[0], articles5.data.articles[0]];
        console.log(dashboardArticlesArray);
        yield put(fetchDashboardNewsSuccess(dashboardArticlesArray));
    } else {
        yield put(fetchDashboardNewsFailed({
            message: 'Failed to fetch Data'
        }));
    }
}

export default function* rootSaga(){
    yield takeLatest(FETCH_NEWS_DATA_REQUEST, fetchNews);
    yield takeLatest(FETCH_DASHBOARD_NEWS_REQUEST, fetchDashboardNews);
}