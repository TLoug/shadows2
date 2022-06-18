import styled from "styled-components";

export const HeaderContainer = styled.div`
background: #2196f3;
padding: 0 0.5rem;
height: 8vh;
min-height: 4rem;
display: flex;
justify-content: center;
align-items: center;

`
export const Letter = styled.span`
text-transform: uppercase;
animation: a 4s ease forwards infinite;
font-size: 50px;
font-family: poppins;
color: dark-blue;

@keyframes a{
    0%, 100%{
        text-shadow 0 0 0 #000;
    }
    50%{
        text-shadow 0 30px 25px #000;
    }
}
`