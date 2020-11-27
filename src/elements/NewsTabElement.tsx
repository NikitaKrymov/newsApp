import styled from 'styled-components';

export default styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em 2em 0.5em 2em;
    font-size: 1.2em;
    transition: 0.5s;
    color: white;
    :hover {
        color: white;
        cursor: pointer;
        transform: translateY(-0.2em);
        transition: 0.2s;
    }
`