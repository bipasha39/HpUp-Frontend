import React, { useState } from 'react';
import { BellIcon, SearchIcon } from '@chakra-ui/icons';
import {
  Text,
  Stack,
  Container,
  Image,
  bg,
  Button,
  ButtonGroup,
  SimpleGrid,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Flex,
  Spacer,
  Box,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  InputGroup,
  email,
  setEmail,
  password,
  setPassword,
  InputRightElement,
  handleClick,
  show,
  Divider,
  handleSubmit,
  Input,
  extendTheme,
  InputLeftElement,
  PhoneIcon,
} from '@chakra-ui/react';
export default function CompanyHoliday() {
  return (
    <Box bg="#E2E8F0" flex="1">
      ​
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input type="text" placeholder="search" />
        <BellIcon color="grey" w={8} h={8} m="2" />
      </InputGroup>
      ​ ​
      <Flex justifyContent="space-around" align="center" direction="row">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image
            m="2"
            boxSize="150px"
            objectFit="cover"
            src="https://bit.ly/sage-adebayo"
            alt="Segun Adebayo"
          />
          <Box display="flex" flexDirection="row" m="2">
            <Button
              w="90px"
              h="40px"
              color="blue"
              border="1"
              borderColor="black"
              mr="2"
              mb="2"
            >
              Edit
            </Button>
            <Button w="90px" h="40px" color="blue" mr="2" mb="2">
              Message
            </Button>
          </Box>
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
      <Tabs variant="enclosed">
        <TabList>
          <Tab>Personal data</Tab>
          <Tab>Requests</Tab>
        </TabList>
        <TabPanels>
          <TabPanel></TabPanel>
          <TabPanel
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
          >
            <Box w="30%" boxShadow="lg" p="6" rounded="md" bg="white">
              <Text>12-12-2020</Text>
              <Text>Holiday Request</Text>
              <Text>I want to take a holiday at 2020-12-23</Text>
              <Text>Response:</Text>
              <Box>
                <Button
                  w="120px"
                  h="40px"
                  color="blue"
                  mr="2"
                  mb="2"
                  colorScheme="green"
                >
                  Approve
                </Button>
                <Button
                  w="120px"
                  h="40px"
                  color="blue"
                  mr="2"
                  mb="2"
                  colorScheme="red"
                >
                  Decline
                </Button>
              </Box>
              ​
            </Box>
            ​
            <Box w="30%" boxShadow="lg" p="6" rounded="md" bg="white">
              <Text>12-12-2020</Text>
              <Text>Holiday Request</Text>
              <Text>I want to take a holiday at 2020-12-23</Text>
              <Text>Response:</Text>
              <Button w="120px" h="40px" mr="2" mb="2">
                Declined
              </Button>
              ​
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
      ​
    </Box>
  );
}
