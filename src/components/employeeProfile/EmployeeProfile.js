import React, {useState, useEffect} from 'react';
import Moment from 'react-moment';
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
  
  const [requests,setRequests] = useState([]);

      useEffect(()=>{
        fetch(`http://188.166.50.249/users/${employee.id}/requests`).then(
          async response => {
            const data = await response.json();
            setRequests(data);
            console.log("data", data)
          }
        ).catch(error => {
          console.error('There was an error!', error);
        });
        
      },[])
  
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
            <Text fontSize="md">{employee.firstName && employee.firstName}</Text>
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
     <Box d="flex" justifyContent="center" flexDirection="column" alignItems="center">
        {requests && requests.map((request)=>{
            return(
              <Box mb="4" w="80%" boxShadow="lg" p="6" rounded="md" bg="white"> 
              <Button backgroundColor={ request.status === "open" || request.status === "approved" ? "Green" : "Red"  } color="white">
               {request.status}
              </Button>
              <Text></Text>
              <Text fontWeight="bold">Holiday Request</Text>
              <Text>Days Requested:</Text>
              <Text>From <Moment format="DD/MM/YYYY">{request.initDate}</Moment> To <Moment format="DD/MM/YYYY">{request.endDate}</Moment></Text>
              <Text>Description</Text>
              <Text>
              {request.description}
              </Text>
              ​
              </Box>
            )

        })} 
     </Box>
          ​
          
         
    </Box>
  );
}
