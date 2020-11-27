import React from 'react';
import ArticleContent from '../elements/ArticleContent';
import ArticleDiv from '../elements/ArticleDiv';
import ArticleInner from '../elements/ArticleInner';
import '../css/main.css';
import FlexBox from '../elements/FlexBox';
import theme from '../theme';
import ReadMoreButton from '../elements/ReadMoreButton';
import history from '../history';

interface Props {
    width: string,
    height: string,
    data: any,
    url: string
}

const Article: React.FC<Props> = (props) => {
        return(
            <ArticleDiv theme={{ width: props.width, height: props.height }} className='flipContainer' >
                <ArticleInner className='flipInner' style={{ cursor: 'pointer'}}>
                    <ArticleContent style={{ backgroundImage: `url(${props.data.urlToImage})`, backgroundSize: 'cover' }}>
                        <div style={{ textShadow: "0 0 2px solid grey", color: 'white', fontSize: '1.5em', display: 'flex',  justifyContent: 'center', alignItems: 'flex-end', height: '100%', backgroundImage: "linear-gradient(rgb(255,255,255,0), black)", marginBottom: '0.5em'  }}>
                            <div style={{ marginBottom: '0.5em' }}>
                                {props.data.title}
                            </div>
                        </div>
                    </ArticleContent>
                    <ArticleContent style={{ backgroundColor: 'transparent', transform: 'rotateY(180deg)'}} onClick={() => history.push(`/${props.url}`)}>
                        <FlexBox theme={{ flexDirection: theme.flexDirection.column }} style={{ height: '100%', border: '1px solid grey'}}>
                            <div style={{ color: 'black', fontSize: '1.2em', display: 'flex',  justifyContent: 'center', alignItems: 'flex-start', height: '100%', margin: '0.5em', overflow: 'hidden', marginTop: '1em'  }}>
                                {props.data.description}
                            </div>
                            <FlexBox theme={{ justifyContent: 'center', alignItems: 'flex-end'}}>
                                <ReadMoreButton style={{ margin: '0.5em' }}>
                                    <div style={{ marginTop: '0.35em' }}>
                                        Read
                                    </div>
                                </ReadMoreButton>
                            </FlexBox>
                        </FlexBox>
                    </ArticleContent>
                </ArticleInner>
            </ArticleDiv>
        );

}

export default Article;