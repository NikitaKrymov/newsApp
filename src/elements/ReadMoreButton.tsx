import styled from 'styled-components';

export default styled.div`
    width: 5em;
    height: 2em;
    text-decoration: none;
    outline: none;
    border: none;
    box-shadow: 0 0 5px black;
    border-radius: 0.5em;
    transition: 0.2s;
    background: navy;
    color: white;
    :hover {
        background: white;
        transition: 0.2s;
        color: black;
    }
`