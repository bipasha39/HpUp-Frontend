import React, {useState} from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  InputGroup,
  InputRightElement,
  showPass,
  IconButton,
  handleToggle,
  Button,
  Stack,
  Heading,
  Divider,
  Container,
  Center,
  Spacer 
} from '@chakra-ui/react';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const[password,setPassword] = useState("");
  const handleSubmit = ()=>{
    console.log("logged in as",email,password)
  }
  return (
    <Center h="80vh">
   <Container >
     
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
              <Input type="email" 
              value={email} 
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email" 
              aria-label="Email" />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
              value={password} 
              onChange={(event) => setPassword(event.target.value)}
                type="password"
                placeholder="Password"
                aria-label="Password"
              />
              <InputRightElement>
                <IconButton
                  icon={showPass ? 'hide' : 'show'}
                  variant="ghost"
                  size="sm"
                  onClick={handleToggle}
                  title={`${showPass ? 'Hide' : 'Show' } Password`}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Divider />
        </Stack>
      </form>
        <flex  >
          <Box >
            <a href="#" colorScheme="blue">Forget password ?</a>
          <Button  colorScheme="blue" size="lg" onClick={handleSubmit} >
        Login
      </Button>
      </Box>
      </flex>
         
    </Container>
    </Center>
  );
}
