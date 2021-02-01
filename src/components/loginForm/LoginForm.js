import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  InputGroup,
  InputRightElement,
  showPass,
  IconButton,
  handleClick,
  Button,
  Stack,
  Heading,
  Divider,
  Container,
  Center,
  Spacer,
  show,
} from '@chakra-ui/react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
    console.log('logged in as', email, password);
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
        <a href="#" >
          Forget password ?
        </a>
        
        <Button colorScheme="blue" size="lg" variant="solid" onClick={handleSubmit}>
          Login
        </Button>
      </Box>
    </Container>
  );
}
