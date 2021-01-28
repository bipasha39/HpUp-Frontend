import React from 'react';

import {
  ChakraProvider,
  theme,
  VStack,

} from '@chakra-ui/react';



import { ColorModeSwitcher } from './ColorModeSwitcher';
import Login from "./pages/login/Login";
// import SignUp from "./pages/signUp/SignUp";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <VStack>
     
      
          <ColorModeSwitcher justifySelf="flex-end" />
          
          
           <Login />
          
        
      
      </VStack>
    </ChakraProvider>
  );
}

export default App;
