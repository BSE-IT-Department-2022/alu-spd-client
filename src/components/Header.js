import React from "react";
import { Box, styled } from '@mui/material';
import headerImage from '../assets/imgs/new.webp';


function Header() {
  const StyleHeader = styled(Box)(({theme})=>({
   display: "flex",
   justifyContent: "center", 
   minHeight:400, 
   backgroundImage: `url(${headerImage})`, 
   backgroundSize: "cover", 
   backgroundPosition: "center",
   filter: "brightness(50%)",
   backgroundColor: theme.palette.secondary.main
  }));

  return (
    <React.Fragment>
      <StyleHeader>

      </StyleHeader>
    </React.Fragment>
  );
}


export default Header;
