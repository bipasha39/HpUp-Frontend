import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
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

import ErrorMessage from '../ErrorMessage';
import {userLogin} from '../../utils/mockApi';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // const userLogin = async ({ email, password })=>{
  //   if (email == 'abc@gmail.com'&& password =='123'){
  //     console.log('login')
  //     return true;
  //   }
  //   else{
  //     throw 'some error';
  //   } 
  // }
  const handleSubmit = async event => {
      event.preventDefault();
      setIsLoading(true);
      try {
         await userLogin({ email, password });
          setIsLoading(false);
          setError ('');
      } catch (error) {
          setError('Invalid username or password');
          setIsLoading(false);
          setEmail('');
          setPassword('');
      }
  };
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
            <FormLabel>Email address</FormLabel>
            <InputGroup>
              <Input
                type="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                placeholder="Email"
                aria-label="Email"
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                value={password}
                onChange={event => setPassword(event.target.value)}
                type="password"
                placeholder="Password"
                aria-label="Password"
              />
             
                <InputRightElement width="4.5rem">
                  <Button  h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              
            </InputGroup>
          </FormControl>
        </Stack>
        <Divider />
      </form>
      <Box display="flex" p="4" justifyContent="space-between">
        <a href="#" >
          Forget password ?
        </a>
        
        <Button isLoading={isLoading} colorScheme="blue" size="lg" variant="solid" onClick={handleSubmit}>
          Login
        </Button>
      </Box>
    </Container>
  );
}
