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

  // const userLogin = async ({ email, password })=>{
  //   if (email == 'abc@gmail.com'&& password =='123'){
  //     console.log('login')
  //     return true;
  //   }
  //   else{
  //     throw 'some error';
  //   } 
  // }
  // const handleSubmit = async event => {
  //   event.preventDefault();
  //   setIsLoading(true);
  //   try {
  //     await userLogin({ email, password });
  //     setIsLoading(false);
  //     setError('');
  //     // CompanyPanelView.show();

  //   } catch (error) {
  //     setError(error);
  //     setIsLoading(false);
  //     setEmail('');
  //     setPassword('');
  //   }
  // };

  const fetchLogin = (e) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username, password: password })
    };
    fetch('http://188.166.50.249/login', requestOptions)
      .then(async response => {
        const data = await response.json();

        if (!response.ok) {
          //const error = (data && data.message) || response.status;
          const error = (data && data.code);
          return Promise.reject(error);
        }

        if (data.role === "employer") {
          history.push('/dashboard');
        }
        if (data.role === "employee") {
          history.push('/profile');
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
      >
        Login
      </Heading>

      <form action="submit">
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
              />

              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
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
          Forget password ?
        </Link>

        <Button isLoading={isLoading} colorScheme="blue" size="lg" variant="solid" onClick={fetchLogin}>
          Login
        </Button>
      </Box>
    </Container>
  );
}
