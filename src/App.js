import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

import { ChakraProvider, theme, Box } from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import Login from './pages/login/Login';
import SignUp from "./pages/signUp/SignUp";
import Remind from "./pages/remind/Remind";

function App() {
  return (
<Router>
<ChakraProvider theme={theme}>
      <Box minH="100vh" display="flex" flexDirection="column">  
        <Switch>
          <Route exact path="/">
          <Redirect to="/login" />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
          <SignUp />
          </Route>
          <Route path="/remind">
          <Remind />
          </Route>
        </Switch>
      </Box>
    </ChakraProvider>
</Router>
 );    
}

export default App;
