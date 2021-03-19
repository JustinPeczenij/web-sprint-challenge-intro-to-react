// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 40%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-family: 'Syne Mono', monospace;
    border: 1px solid #4AFD34;
    margin: 5px 0;
    padding: 0 1%;
`;

const StyledH2 = styled.h2`
    font-size: 2rem;
    color: #f4f4f4;
    text-shadow: 0.2rem 0.2rem black;
`;

const StyledH3 = styled.h2`
    font-size: 1.5rem;
    color: #f4f4f4;
    text-shadow: 0.2rem 0.2rem black;
`;

// const WideDiv = styled.div`
//     width: 50%;
//     border:1px solid red;
// `;


export default function Character({ details }) {
    return(
        <StyledDiv>
            <StyledH2>{details.name}</StyledH2>
            <StyledH3>Weight: {Math.round(details.mass * 2.2)} pounds</StyledH3>
        </StyledDiv>
    )
}
