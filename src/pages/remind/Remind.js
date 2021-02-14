import React, { Fragment } from 'react';
import RemindForm from '../../components/remindForm/RemindForm';
import Header from '../../components/header/Header';


import { Box } from '@chakra-ui/react';

export default function Remind() {
  return (
    <Fragment>
      <Header />
      <Box display="flex" flex="2" alignItems="center" justifyContent="center">
        <RemindForm />
      </Box>
    </Fragment>
  );
}
