import React from "react";
import { headerConfig } from "./header.config";
import { HeaderContainer, Letter } from "./header.styles";



const Header = () => {
   return headerConfig.map((config, i) => {
       const color = config.color
       const delay = config.animationDelay
       return config.letter === "-" ? <div key={i} style={{padding: "5px"}}/> :<Letter key={i} style={{ animationDelay: delay}}>{config.letter}</Letter> 
    })
}

const HeaderAnimation = () => {
  return (
    <HeaderContainer>
        <Header/>
    </HeaderContainer>
  );
};


export { HeaderAnimation };