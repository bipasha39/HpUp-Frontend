import React from 'react';
import { BellIcon } from '@chakra-ui/icons';
import {
  Text,
  Stack,
  Image,
  Button,
  Flex,
  Box,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
export default function EmployeeProfile({ employee }) {
  console.log('employee', employee);
  return (
    <Box bg="#E2E8F0" flex="1">
      ​
      <Box display="flex" justifyContent="center">
        <Box
          display="flex"
          flex="1"
          p="2"
          maxW="1200px"
          justifyContent="space-between"
        >
          <Heading color="Black" size="lg" fontSize="50px">
            {/* {employee.name} */}
          </Heading>
          ​
          <Box display="flex" alignItems="center">
            <BellIcon color="grey" w={8} h={8} />
          </Box>
        </Box>
      </Box>
      ​
      <Flex justifyContent="space-around" align="center" direction="row">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image
            m="2"
            boxSize="150px"
            objectFit="cover"
            src="https://thispersondoesnotexist.com/image"
            alt="Segun Adebayo"
          />
          <Button w="170px" h="40px" colorScheme="blue" mb="2">
            Holiday Request
          </Button>
        </Box>
        <Flex m="2" direction="column" w="20%">
          <Stack justify="space-between" direction="row">
            <Text fontSize="md">First Name:</Text>
            <Text fontSize="md">{employee.firstName}</Text>
          </Stack>

          <Stack justify="space-between" direction="row">
            <Text fontSize="md">Last Name:</Text>
            <Text fontSize="md">{employee.lastName}</Text>
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
            textAlign="center"
            w="100%"
          >
            <Text>Available Holidays</Text>
            <Text>{employee.remainingDays} Remaining Days</Text>
          </Box>
          ​
        
        </Flex>
      </Flex>
      ​
      <Tabs variant="enclosed">
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box w="80%" boxShadow="lg" p="6" rounded="md" bg="white">
              <Button backgroundColor="Red" color="white">
                Declined
              </Button>
              <Text>2021-01-01</Text>
              <Text fontWeight="bold">Holiday Request</Text>
              <Text>I want to take a holiday at 2020-12-23</Text>
              <Text>Response:</Text>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Text>
              ​
            </Box>
          </TabPanel>
          <TabPanel>
            <Box w="80%" boxShadow="lg" p="6" rounded="md" bg="white">
              <Button backgroundColor="Green" color="white">
                Approved
              </Button>
              <Text>2021-01-01</Text>
              <Text font-weight="bold">Holiday Request</Text>
              <Text>I want to take a holiday at 2020-12-23</Text>
              <Text>Response:</Text>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Text>
              ​
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
      ​
    </Box>
  );
}
