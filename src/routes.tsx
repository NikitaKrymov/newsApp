import { Router, Route } from 'react-router-dom';
import React from 'react';
import history from './history';
import Dashboard from './modules/Dashboard';
import ArticleList from './modules/ArticleList';

export const createRoutes = () => (
    <Router history={history}>
        <Route path="/" exact component={Dashboard} />
        <Route path="/:url" exact component={ArticleList} />
    </Router>
)