import React from 'react';
import Article from './Article';
import { connect } from 'react-redux';
import { AppState } from '../reducer/rootReducer';
import LoadingPage from '../elements/LoadingPage';
import '../css/main.css';
import { Dispatch } from 'redux';
import { fetchNewsRequest } from '../actions';
import ArticleListElement from './ArticleListElement';
import FlexBox from '../elements/FlexBox';
import theme from '../theme';

interface OwnProps {
    match: any
}

type Props = OwnProps & MapStateToProps & MapDispatchToProps;

const ArticlesList:React.FC<Props> = (props) => {
    React.useEffect(() => {
        props.fetchNews(props.match.params.url)
    }, [props.match.params.url]);

    if (props.isLoading) {
        return(
            <LoadingPage>
                <div className="spinner">

                </div>
            </LoadingPage>
        );
    } else {
        return (
            <FlexBox theme={{ justifyContent: theme.justifyContent.center }} style={{ marginTop: '1em'}}>
                <FlexBox theme={{ flexDirection: theme.flexDirection.column }} style={{ width: '70%'}}>
                    {props.newsData.map((article: any, i: number) => {
                        return(
                            <ArticleListElement article={article} key={i} >
                                Article List
                            </ArticleListElement>
                        );
                    })}
                </FlexBox>
            </FlexBox>
        );
    }
}

interface MapStateToProps {
    newsData: any,
    isLoading: boolean
}

interface MapDispatchToProps {
    fetchNews: (param: string) => void,
}

const mapStateToProps = (state: AppState): MapStateToProps => ({
    newsData: state.app.newsData,
    isLoading: state.app.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => ({
    fetchNews: (param) => dispatch(fetchNewsRequest(param)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);