import React from 'react';
import {
  Link
} from "react-router-dom";
import './header.css';
import {
  Button,
  Box,
  Heading,
} from '@chakra-ui/react';

export default function Header() {
  return (
    <Box
      bg="#192A3E"
      display="flex"
      flexDirection="row"
      justifyContent="center"
    >
      <Box display="flex" flex="1" p="2" maxW="1200px" justifyContent="space-between">
        <Heading color="#CBD5E0" size="lg" fontSize="50px">
          HrUp
        </Heading>

        <Box display="flex" alignItems="center">
          <Button as={Link} to="/signup" colorScheme="blue" variant="ghost" >
            Sign Up
          </Button>
          <Button as={Link} to="/login"colorScheme="blue"variant="ghost" >
            Log in
            </Button>
        </Box>
      </Box>
    </Box>
  );
}
