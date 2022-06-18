import styled from "styled-components"

export const Container = styled.div`
 margin: 0;
 padding: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 min-height: 100vh;
 background #2196f3;
`

export const Wrapper = styled.div`
position: relative;
display: flex;
`

export const Box = styled.div`
width: 50px;
height: 300px;
margin: 0 20px;
background: #2196f3;
animation: animate 1.4s linear infinite;

@keyframes animate {
    0%
    {
        box-shadow: 0 0 0 rgba(0,0,0,.5);
        opacity: 0;
        transform: translateX(-50px) scale(1);
    }
    50%
    {
        box-shadow: 0 20px 20px rgba(0,0,0,.5);
        opacity: 1;
        transform: translateX(0px) scale(1.2);
    }
    100%
    {
        box-shadow: 0 0 0 rgba(0,0,0,.5);
        opacity: 0;
        transform: translateX(50px) scale(1);
    }
}
`