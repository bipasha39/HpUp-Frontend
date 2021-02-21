import React, { useState } from 'react';
import {
  FormControl,
  Input,
  Box,
  InputGroup,
  InputRightElement,
  handleClick,
  Button,
  Stack,
  Heading,
  Divider,
  Container,
  show
} from '@chakra-ui/react';
import {
  Link, useHistory
} from "react-router-dom";

import ErrorMessage from '../ErrorMessage';
import {} from '../../utils/mockApi';


export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();


  const fetchLogin = (e) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username, password: password })
    };
    fetch('http://188.166.50.249/login', requestOptions)
      .then(async response => {
        const data = await response.json();
        console.log("data is ", data)
        if (!response.ok) {
          const error = (data && data.code);
          return Promise.reject(error);
        }

        if (data.role === "employer") {
          history.push({pathname:'/dashboard', employer:data});
        }
        if (data.role === "employee") {
          history.push({pathname: '/profile', employee:data})
        }

      })
      .catch(error => {
        setError(error);
        console.error('There was an error!', error);
      });
  }


  return (
    <Container>
      <Heading
        as="h1"
        textAlign="center"
        textTransform="uppercase"
        letterSpacing={2}
        color="#192A3E"
        
      >
        Login
      </Heading>

      <form action="submit" >
        <Stack spacing={4}>
          {error && <ErrorMessage message={error} />}
          <FormControl isRequired>
            <InputGroup>
              <Input
                type="text"
                value={username}
                onChange={event => setUsername(event.target.value)}
                placeholder="User name"
                aria-label="User name"
                bg="#192A3E"
                color="White"
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <InputGroup>
              <Input
                value={password}
                onChange={event => setPassword(event.target.value)}
                type="password"
                placeholder="Password"
                aria-label="Password"
                bg="#192A3E"
                color="White"
              />

              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick} >
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>

            </InputGroup>
          </FormControl>
        </Stack>
        <Divider />
      </form>
      <Box display="flex" p="4" justifyContent="space-between">
        <Link to="/remind" >
          <Box borderRadius="2%" bg="White">Forget password ?</Box>
        </Link>

        <Button isLoading={isLoading} colorScheme="blue" size="lg" variant="solid" onClick={fetchLogin} bg="#192A3E">
          Login
        </Button>
      </Box>
    </Container>
  );
}
