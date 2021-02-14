import React, { Fragment } from 'react';
import LoginForm from '../../components/loginForm/LoginForm';
import Header from '../../components/header/Header';


import { Box } from '@chakra-ui/react';

export default function Login() {
  return (
    <Fragment>
      <Header />
      <Box display="flex" flex="2" alignItems="center" justifyContent="center">
        <LoginForm />
      </Box>
    </Fragment>
  );
}
