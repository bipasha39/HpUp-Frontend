import React from 'react';
import {
  FormControl,
  Input,
  InputGroup,
  Icon,
  InputLeftElement,
  Button,
  Stack,
} from '@chakra-ui/react';

export default function LoginForm() {
  return (
    <div className="loginForm_container">
      <h1>Login</h1>
      <form action="submit">
        <Stack spacing={4}>
          <FormControl isRequired>
            <InputGroup>
              <InputLeftElement children={<Icon name="email" />} />
              <Input type="email" placeholder="Email" aria-label="Email" />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <InputGroup>
              <InputLeftElement children={<Icon name="lock" />} />
              <Input
                type="password"
                placeholder="Password"
                aria-label="Password"
              />
            </InputGroup>
          </FormControl>
        </Stack>
      </form>

      <div className="loginFormButton_container">
        <a href="#">Forget password</a>

        <Button colorScheme="blue">Login</Button>
      </div>
    </div>
  );
}
