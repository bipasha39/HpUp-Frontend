import React from 'react';
import './header.css';
import { Flex, Spacer,Button,Box,Heading } from "@chakra-ui/react"


export default function Header() {  

    return (
        <div className="header_container">
  <Box p="2">
  <Button colorScheme="#192A3E" size="lg" fontSize="50px">
      HrUp
    </Button>
    {/* <Heading colorScheme="tomato" size="lg" fontSize="50px">HrUp</Heading> */}
  </Box>
  <Spacer />
  <Box>
    <Button colorScheme="#1B2F44" mr="4">
      Sign Up
    </Button>
    <Button colorScheme="#1B2F44">Log in</Button>
  </Box>
</div>
          
    );
            
    
}
