import React from 'react';
import { BellIcon } from '@chakra-ui/icons';
import {
  Text,
  Stack,
  Image,
  Button,
  FormControl,
  FormLabel,
  Flex,
  Box,
  Heading,
  Input,
} from '@chakra-ui/react';
import {} from 'react-router-dom';

export default function EmployeeHoliday() {
  return (
    <Box flex="1" bg="#EDF2F7">
      <Box bg="white">
        <Box
          display="flex"
          justifyContent="space-around"
          flexDirection="row"
          alignItems="center"
        >
          <Heading color="black" size="lg" fontSize="50px">
            Johnson
          </Heading>
          ​
          <BellIcon color="grey" w={8} h={8} />
        </Box>
      </Box>
      ​
      <Flex justifyContent="space-around" align="center" direction="row">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image
            m="2"
            boxSize="150px"
            objectFit="cover"
            src="https://bit.ly/sage-adebayo"
            alt="Segun Adebayo"
          />
          <Button w="170px" h="40px" mb="2" color="grey">
            Holiday Request
          </Button>
        </Box>
        <Flex m="2" direction="column" w="20%">
          <Stack justify="space-between" direction="row">
            <Text fontSize="md">Name:</Text>
            <Text fontSize="md">John</Text>
          </Stack>

          <Stack justify="space-between" direction="row">
            <Text fontSize="md">Second Name:</Text>
            <Text fontSize="md">Walter</Text>
          </Stack>
          <Stack justify="space-between" direction="row">
            <Text fontSize="md">Employee Since:</Text>
            <Text fontSize="md">Address</Text>
          </Stack>
          <Stack justify="space-between" direction="row">
            <Text fontSize="md">Nationality:</Text>
            <Text fontSize="md">American</Text>
          </Stack>
          <Stack justify="space-between" direction="row">
            <Text fontSize="md">Current Time:</Text>
            <Text fontSize="md">Spain</Text>
          </Stack>
        </Flex>

        <Flex
          justify="space-between"
          align="center"
          direction="row"
          border="2px"
          borderColor="black"
          w="40%"
          p="5"
        >
          <Box
            flex-direction="column"
            justify-content="center"
            textAlign="left"
            w="100%"
          >
            <Text>Working Hours</Text>
            <p> 29:04</p>
            <Text>Feb 12 - Feb 28</Text>
          </Box>
          <Box
            flex-direction="column"
            justify-content="center"
            textAlign="left"
            w="100%"
          >
            <Text>Available Holidays</Text>
            <p>28 Days</p>
            <Text>1 Jan 2021 - 31 Dec 2021</Text>
          </Box>
          ​
          <Box
            flex-direction="column"
            justify-content="center"
            textAlign="left"
            w="100%"
          >
            <Text>Current Salary</Text>
            <p>358$</p>
            <Text>1 Jan 2021 - 31 Jan 2021</Text>
          </Box>
        </Flex>
      </Flex>
      ​
      <Flex direction="row" justify="flex-start" m="3">
        <FormControl id="title" isRequired width="25%" mr="2">
          <FormLabel>Title</FormLabel>
          <Input placeholder="Title" />
          <p>Put title here</p>
        </FormControl>
        <FormControl id="date" isRequired width="25%" mr="2">
          <FormLabel>Date</FormLabel>
          <Input placeholder="Date" />
          <p>Put date here</p>
        </FormControl>
      </Flex>
      <Flex direction="column">
        ​
        <FormControl id="message" isRequired>
          <FormLabel>Message</FormLabel>
          <Input placeholder="Message" />
        </FormControl>
        <Flex justify="flex-end">
          <Button w="170px" h="40px" colorScheme="blue" m="10">
            Submit
          </Button>
        </Flex>
        ​
      </Flex>
      ​
    </Box>
  );
}
