import React, { useState } from 'react';
import ArticleListElement from '../elements/ArticleListElement';
import FlexBox from '../elements/FlexBox';
import GridBox from '../elements/GridBox';
import ReadMoreButton from '../elements/ReadMoreButton';
import theme from '../theme';

const MAIN_FLEXBOX_THEME = {
    flexDirection: theme.flexDirection.column,
    justifyContent: theme.justifyContent.center
}

const TOP_GRIDBOX_THEME = {
    gridTemplateColumns: '2fr 5fr'
}

const TITLE_STYLE = {
    fontSize: '1.7em',
    color: 'navy',
    margin: '1em',
}

const DESCRIPTION_STYLE = {
    fontSize: '1em',
    color: 'black',
    margin: '1em 3em 1em 3em'
}

const READ_MORE_STYLE = {
    color: theme.colors.white,
    backgroundColor: theme.colors.navy,
    hoverColor: theme.colors.navy,
    hoverBackgroundColor: theme.colors.white,
    hoverBoxShadow: '0 0 3px navy',
    borderRadius: '1em',
    marginTop: '1em',
    marginLeft: '1em',
    marginBottom: '1em'
}

const INFO_THEME = {
    flexDirection: theme.flexDirection.column
}

const CONTENT_STYLE = {
    color: 'grey',
}

interface Props {
    article: any
}

const Article: React.FC<Props> = (props) => {
    const [hidden, setHidden] = useState(true);

    return(
        <ArticleListElement>
        <FlexBox theme={MAIN_FLEXBOX_THEME} style={{ width: '100%' }}>
            <GridBox theme={TOP_GRIDBOX_THEME}>
                <FlexBox id="imageFrame" style={{ display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                    <img src={props.article.urlToImage} alt={props.article.source.name} style={{ width: '30em', minHeight: '20em', maxHeight: '30em' }}/>
                </FlexBox>
                <FlexBox id="title" theme={{ flexDirection: 'column' }} style={{ height: '100%' }} >
                    <FlexBox theme={{ justifyContent: 'center'}} style={TITLE_STYLE} >
                        {props.article.title}
                    </FlexBox>
                    <FlexBox theme={{ justifyContent: 'center', alignItems: 'center'}} style={DESCRIPTION_STYLE}>
                        {props.article.description}
                    </FlexBox>
                    <FlexBox theme={{ justifyContent: 'center', alignItems: 'flex-end' }}>
                        <ReadMoreButton theme={READ_MORE_STYLE} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '8em', height: '2em' }} onClick={() => setHidden(!hidden)}>
                            {hidden ? 'Read More' : 'Close'}
                        </ReadMoreButton>
                    </FlexBox>
                    <FlexBox theme={INFO_THEME} style={{ color: 'grey', margin: '1em' }}>
                        <FlexBox theme={{ justifyContent: theme.justifyContent.flexEnd }}>
                            (c) {props.article.source.name}
                        </FlexBox>
                        <FlexBox theme={{ justifyContent: theme.justifyContent.flexEnd }}>
                        </FlexBox>
                    </FlexBox>
                </FlexBox>
            </GridBox>
            {hidden ? null : <FlexBox style={{
                color: 'grey',
                opacity: hidden ? '0' : '1',
                marginTop: '1em',
            }}>
                {props.article.content}
                {props.article.content}
                {props.article.content}
                {props.article.content}
                {props.article.content}
                {props.article.content}
                {props.article.content}
                {props.article.content}
                {props.article.content}
                {props.article.content}
                {props.article.content}
                {props.article.content}
            </FlexBox>}
        </FlexBox>
        </ArticleListElement>
    );
}

export default Article;