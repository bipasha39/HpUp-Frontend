import React from 'react';
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
} from '@chakra-ui/react';

export default function LoginForm() {
  return (
    <div className="loginForm_container">
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
             
              <Input type="email" placeholder="Email" aria-label="Email" />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
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
                  title={`${showPass ? 'Hide' : 'Show'} Password`}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Divider />
        </Stack>
      </form>
     
        <flex>
          <Box>
            <a href="#">Forget password</a>
          </Box>
        </flex>
     
      <Button justifiying content ="center" variantColor="blue" type="submit" shadow="md">
        Login
      </Button>
    </div>
  );
}
