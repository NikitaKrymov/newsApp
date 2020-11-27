import React, { useState } from 'react';
import NewsSearchBar from './SearchBar';
import AppDiv from '../elements/AppDiv';
import GlobalStyle from '../elements/GlobalStyle';
import { createRoutes } from '../routes';
import TabList from './TabList';

const routes = createRoutes();

const App: React.FC = (props) => {
    return(
        <div style={{ position: "relative" }}>
            <AppDiv>
                <GlobalStyle />
                <NewsSearchBar />
                <TabList />
                {routes}
            </AppDiv>
        </div>
    );
}
export default App;