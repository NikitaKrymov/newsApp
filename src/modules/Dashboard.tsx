import React from 'react';
import DashboardDiv from '../elements/DashboardDiv';
import FlexBox from '../elements/FlexBox';
import GridBox from '../elements/GridBox';
import LoadingPage from '../elements/LoadingPage';
import theme from '../theme';
import '../css/main.css';
import Article from './Article';
import { AppState } from '../reducer/rootReducer';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { fetchDashboardNewsRequest } from '../actions';

const INITIAL_REQUEST = {
    param1: 'tesla', 
    param2: 'sport', 
    param3: 'spaceX', 
    param4: 'techcrunch', 
    param5: 'ecology'
}

const GRIDBOX_THEME = {
    gridTemplateColumns: '1fr 2fr'
}

const ARTICLE_SETTINGS = {
    width: '25em',
    height: '18em'
}

type Props =  MapDispatchToProps & MapStateToProps;

const Dashboard: React.FC<Props> = (props) => {

    React.useEffect(() => {
        props.fetchDashboardNewsRequest(INITIAL_REQUEST.param1, INITIAL_REQUEST.param2, INITIAL_REQUEST.param3, INITIAL_REQUEST.param4, INITIAL_REQUEST.param5);
    }, [])

    if (props.isLoading){
        return(
            <LoadingPage>
                <div className="spinner">

                </div>
            </LoadingPage>
        );
    } else {
        console.log(props.articles)
        return(
            <DashboardDiv>
                <GridBox theme={GRIDBOX_THEME} style={{ width: '82em'}}>
                    <Article url={INITIAL_REQUEST.param1} width="25em" height="38em" data={props.articles[0]} />
                    <FlexBox theme={{ justifyContent: theme.justifyContent.flexStart, flexWrap: theme.flexWrap.wrap }}>
                        <Article url={INITIAL_REQUEST.param2} width={ARTICLE_SETTINGS.width} height={ARTICLE_SETTINGS.height} data={props.articles[1]} />
                        <Article url={INITIAL_REQUEST.param3} width={ARTICLE_SETTINGS.width} height={ARTICLE_SETTINGS.height} data={props.articles[2]} />
                        <Article url={INITIAL_REQUEST.param4} width={ARTICLE_SETTINGS.width} height={ARTICLE_SETTINGS.height} data={props.articles[3]} />
                        <Article url={INITIAL_REQUEST.param5} width={ARTICLE_SETTINGS.width} height={ARTICLE_SETTINGS.height} data={props.articles[4]} />
                    </FlexBox>
                </GridBox>
            </DashboardDiv>
        );
    }
}

interface MapStateToProps {
    isLoading: boolean,
    articles: any[]
}

interface MapDispatchToProps {
    fetchDashboardNewsRequest: (param1:string, param2:string, param3:string, param4:string, param5:string) => void
}

const mapStateToProps = (state: AppState): MapStateToProps => ({
    isLoading: state.app.isLoading,
    articles: state.app.initialNews
});

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => ({
    fetchDashboardNewsRequest: (param1, param2, param3, param4, param5) => dispatch(fetchDashboardNewsRequest(param1, param2, param3, param4, param5))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);