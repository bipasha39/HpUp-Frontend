import React from 'react';
import { Alert, AlertIcon } from '@chakra-ui/react';

export default function ErrorMessage(props) {
  return (
    <Alert status="error">
      <AlertIcon />
      {props.message}
    </Alert>
  );
}
