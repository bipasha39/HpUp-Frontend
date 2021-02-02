import React from 'react';

import {
  ChakraProvider,
  theme,
  Box,
  Center,
  VStack

} from '@chakra-ui/react';



import { ColorModeSwitcher } from './ColorModeSwitcher';
import Login from "./pages/login/Login";
// import SignUp from "./pages/signUp/SignUp";


function App() {
  return (
    <ChakraProvider theme={theme}>
     
     <Box minH="100vh" display="flex" flexDirection="column" >
    
     <Login />
   
       </Box>         
        
          
     
    </ChakraProvider>
  );
}

export default App;
