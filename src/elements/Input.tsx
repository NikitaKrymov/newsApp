import styled from 'styled-components';

export default styled.input`
    text-decoration: none;
    margin-right: 1em;
    border: none;
    outline: none;
    font-size: 1.2em;
    padding: 0.5em;
    background-color: navy;
    color: white;
    border-bottom: 1px solid white;
    :focus {
        border-bottom: 1px solid white;
    }
    ::placeholder {
        color: white
    }
`