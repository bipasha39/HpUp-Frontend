import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  InputGroup,
  Icon,
  InputLeftElement,
  InputRightElement,
  showPass,
  IconButton,
  handleToggle,
  Button,
  Stack,
  Heading,
  Divider,
  Checkbox,
} from '@chakra-ui/react';

export default function SignUpForm() {
  return (
    <div className="SignUpForm_container">
      <Heading
        as="h1"
        textAlign="center"
        textTransform="uppercase"
        letterSpacing={2}
      >
        Sign Up
      </Heading>

      <form action="submit">
        <Stack spacing={4}>
        <FormControl isRequired>
            <FormLabel>User Name</FormLabel>
            <InputGroup>
              <InputLeftElement children={<Icon name="info" />} />
              <Input type="name" placeholder="User Name" aria-label="User Name" />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Company Name</FormLabel>
            <InputGroup>
              <InputLeftElement children={<Icon name="info" />} />
              <Input type="name" placeholder="Company Name" aria-label="Company Name" />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Role</FormLabel>
            <InputGroup>
              <InputLeftElement children={<Icon name="info" />} />
              <Input type="name" placeholder="Role" aria-label="Role" />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <InputGroup>
              <InputLeftElement children={<Icon name="email" />} />
              <Input type="email" placeholder="Email" aria-label="Email" />
            </InputGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <InputLeftElement children={<Icon name="lock" />} />
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
      <stack justifyContent="space-between">
        <flex>
          <Box>
            <Checkbox>Remember Me</Checkbox>
          </Box>
      
        </flex>
      </stack>
      <Button variantColor="blue" type="submit" shadow="md">
        Sign Up
      </Button>
    </div>
  );
}




//     return (
//       <form isRequired>
//         <label>
//           Role
//           <select>
//             <option value="Company">Company</option>
//             <option value="Employee">Employee</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }