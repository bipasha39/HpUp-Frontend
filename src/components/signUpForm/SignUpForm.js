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
import {
  useHistory
} from "react-router-dom";

import ErrorMessage from '../ErrorMessage';

export default function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const fetchSignup = (e) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        firstName: firstName,
        lastName:lastName, 
        password: password,
        basedCountry: "USA",
        role: role,
        email: email,
        remainingDays: 30,
        companyId: 1,
        requests:""
      })
    };
    fetch('http://188.166.50.249/signup', requestOptions)
      .then(async response => {
        const data = await response.json();
        console.log("data",data)

        if (!response.ok) {
          //const error = (data && data.message) || response.status;
          const error = (data && data.code);
          return Promise.reject(error);
        }

        if (data.role === "employer") {
          history.push('/dashboard');
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
    <Container className="bodysignup">
      
      <form action="submit">
        {error && <ErrorMessage message={error} />}
        <Stack spacing={4} p="6" mb="4" mt="4" w="80%" ml="auto" mr="auto" boxShadow="lg" p="6" rounded="md" bg="white">
        <Heading
        as="h1"
        textAlign="center"
        textTransform="uppercase"
        letterSpacing={2}
      >
        Sign Up
      </Heading>
          <FormControl isRequired>
            <FormLabel>First Name</FormLabel>
            <InputGroup>
              <Input
                value={firstName}
                onChange={event => setFirstName(event.target.value)}
                type="name"
                placeholder="First Name"
                aria-label="First Name"
                
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel> Last Name</FormLabel>
            <InputGroup>
              <Input
                value={lastName}
                onChange={event => setLastName(event.target.value)}
                type="name"
                placeholder=" Last Name"
                aria-label=" Last Name"
                
              />
            </InputGroup>
          </FormControl>

          <FormControl >
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
            <FormLabel color="Black" >Role</FormLabel>
            <Select
              placeholder="Role"
              value={role}
              onChange={event => setRole(event.target.value)}
             
            >
              <option value="employer">Employer</option>
              <option value="employee">Employee</option>
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
          <Box display="flex" justifyContent="center">
          <Button
          isLoading={isLoading}
          colorScheme="blue"
          
          w="50%"
          size="md"
          variant="solid"
          onClick={fetchSignup}
          bg="#192A3E"
          color="White"
        >
          SignUp
        </Button>
        </Box>
        </Stack>
        <Divider />
      </form>
      <Box display="flex" p="4" justifyContent="center">
        
      </Box>
    </Container>
  );
}
