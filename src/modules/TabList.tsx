import React from 'react';
import FlexBox from '../elements/FlexBox';
import NewsTabElement from '../elements/NewsTabElement';
import theme from '../theme';
import history from '../history';

const TAB_ELEMENTS = [
    {
        label: 'Politics',
        id: 1,
        searchUrl: 'politics'
    },
    {
        label: 'Sport',
        id: 2,
        searchUrl: 'sport'
    },
    {
        label: 'Hot News',
        id: 3,
        searchUrl: 'breaking'
    },
    {
        label: 'Economy',
        id: 4,
        searchUrl: 'economy'
    },    {
        label: 'TechCrunch',
        id: 5,
        searchUrl: 'techcrunch'
    }
]

const FLEXBOX_STYLE = {
    backgroundColor: 'rgb(0, 7, 74)',
    height: '3em'
}

const FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.center,
    flexWrap: theme.flexWrap.wrap
}

const TabList: React.FC = (props) => {
    return(
        <FlexBox theme={FLEXBOX_THEME} style={FLEXBOX_STYLE}>
            {TAB_ELEMENTS.map((element, i) => {
                return (
                    <NewsTabElement key={i} onClick={() => { history.push(`${element.searchUrl}`) }}>
                        {element.label}
                    </NewsTabElement>
                );
            })}
        </FlexBox>
    );
}

export default TabList;