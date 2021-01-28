import React from 'react';
import './header.css';
import { Flex, Spacer,Button,Box,Heading } from "@chakra-ui/react"


export default function Header() {  

    return (
        <div className="header_container">
  <Box p="2">
    <Heading size="md">HrUp</Heading>
  </Box>
  <Spacer />
  <Box>
    <Button colorScheme="teal" mr="4">
      Sign Up
    </Button>
    <Button colorScheme="teal">Log in</Button>
  </Box>
</div>
          
    );
            
    
}
