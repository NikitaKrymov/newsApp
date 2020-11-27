import React from 'react';
import FlexBox from '../elements/FlexBox';
import Input from '../elements/Input';
import theme from '../theme';
import history from '../history';

const FLEXBOX_THEME = {
    justifyContent: theme.justifyContent.sa
}

const FLEXBOX_STYLE = {
    backgroundColor: 'navy',
    padding: '1em',
}

const NewsSearchBar: React.FC = (props) => {
    const [search, setSearch] = React.useState('');

    return(
        <FlexBox theme={FLEXBOX_THEME} style={FLEXBOX_STYLE}>
            <div style={{ fontSize: '2em', color: 'white', cursor: 'pointer' }} onClick={() => history.push('/')}>
                Today's News
            </div>
            <div>
                <Input placeholder="Search News" onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => e.keyCode === 13 ? history.push(`/${search}`) : null }/>
                <i className="fas fa-search" style={{ cursor: 'pointer', color: 'white'}} onClick={() => history.push(`/${search}`)} />
            </div>
        </FlexBox>
    );
}

export default NewsSearchBar;