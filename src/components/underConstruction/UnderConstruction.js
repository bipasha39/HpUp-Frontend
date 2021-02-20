import React from 'react';
import { Box,Heading } from '@chakra-ui/react';
import {
  SettingsIcon
} from '@chakra-ui/icons';
export default function UnderConstruction() {
  return (
    <Box display="flex"  flexDirection="column"flex="2" alignItems="center" justifyContent="center">
     <Box p ="10" w={6} h={6} boxSize="8" color="red.500">
     <SettingsIcon />
     </Box>
      
      <Heading as="h2" size="2xl">
    Under Construction
  </Heading>
    </Box>
  );
}
