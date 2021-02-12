import React, { useState } from 'react';
import {
  FormControl,
  Input,
  Box,
  InputGroup,
  Button,
  Stack,
  Heading,
  Divider,
  Container,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import ErrorMessage from '../ErrorMessage';
import { remindPassword } from '../../utils/mockApi';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await remindPassword({ email });
      setIsLoading(false);
      setError('');
    } catch (error) {
      setError('Invalid email');
      setIsLoading(false);
      setEmail('');
  
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
        Remind Password
      </Heading>

      <form action="submit">
        <Stack spacing={4}>
          {error && <ErrorMessage message={error} />}
          <FormControl isRequired>
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
        </Stack>
        <Divider />
      </form>
      <Box display="flex" p="4" justifyContent="flex-end">
        <Button
          isLoading={isLoading}
          colorScheme="blue"
          size="lg"
          variant="solid"
          onClick={handleSubmit}
        >
          Send me my password
        </Button>
      </Box>
    </Container>
  );
}
