import styled from 'styled-components';

export default styled.div`
    background-color: transparent;
    width: ${props => props.theme.width};
    height: ${props => props.theme.height};
    perspective: 100em;
    margin: 1em;
`