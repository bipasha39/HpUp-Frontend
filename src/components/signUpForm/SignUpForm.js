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
  Select,
  show,
} from '@chakra-ui/react';

import ErrorMessage from '../ErrorMessage';
import { userSignUp } from '../../utils/mockApi';
import {validateSignUp} from '../../utils/validation';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    setIsLoading(true);
    try {
      validateSignUp({username,company,role,email,password});
      await userSignUp({ username, company, role, email, password });
      setIsLoading(false);
      setError('');
    } catch (error) {
      console.log(error)
      setError(error);
      setIsLoading(false);
      // setUsername('');
      // setCompany('');
      // setRole('');
      // setEmail('');
      // setPassword('');
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
        Sign Up
      </Heading>
      <form action="submit">
        {error && <ErrorMessage message={error} />}
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel>User Name</FormLabel>
            <InputGroup>
              <Input
                value={username}
                onChange={event => setUsername(event.target.value)}
                type="name"
                placeholder="User Name"
                aria-label="User Name"
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Company Name</FormLabel>
            <InputGroup>
              <Input
                value={company}
                onChange={event => setCompany(event.target.value)}
                type="name"
                placeholder="Company Name"
                aria-label="Company Name"
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Role</FormLabel>
            <Select
              placeholder="Role"
              value={role}
              onChange={event => setRole(event.target.value)}
            >
              <option value="Company">Company</option>
              <option value="Employee">Employee</option>
            </Select>
          </FormControl>
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
      <Box display="flex" p="4" justifyContent="center">
        <Button
          isLoading={isLoading}
          colorScheme="blue"
          size="lg"
          variant="solid"
          onClick={handleSubmit}
        >
          SignUp
        </Button>
      </Box>
    </Container>
  );
}
