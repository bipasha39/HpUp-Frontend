import React, { Fragment } from 'react';
import SignUpForm from '../../components/signUpForm/SignUpForm';
import Header from '../../components/header/Header';
import './signUp.css';

import { Box } from '@chakra-ui/react';

export default function SignUp() {
  return (
    <Fragment>
      <Header />
      <Box display="flex" flex="2" alignItems="center" justifyContent="center" className="bodysign">
        <SignUpForm />
      </Box>
    </Fragment>
  );
}

