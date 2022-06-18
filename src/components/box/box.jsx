import React from "react";
import { boxesConfig } from "./box.config";
import { Box, Container, Wrapper } from "./box.styles";


const Boxes = () => {
  console.log("running")

   return boxesConfig.map((config, i) => {
       const color = config.color
       console.log("running box")

       const delay = config.animationDelay
       return <Box key={i} style={{ animationDelay: delay}}></Box> 
    })
}

const BoxAnimation = () => {
  console.log("running constainer")
  return (
    <Container>
      <Wrapper>
        <Boxes/>
      </Wrapper>
    </Container>
  );
};


export { BoxAnimation };