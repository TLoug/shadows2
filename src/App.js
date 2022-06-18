import styled from "styled-components";
import { BoxAnimation } from "./components/box/box";
import { HeaderAnimation } from "./components/header/header";
import "./styles.css"

const AppContainer = styled.div`
background: grey;
`

export default function App() {
  return (
    <AppContainer>
      <HeaderAnimation />
      <BoxAnimation/>
    </AppContainer>
  );
}
