import React, {useState, useEffect} from 'react';
import Moment from 'react-moment';
import { useHistory } from "react-router-dom";
import {
  Text,
  Stack,
  Image,
  Button,
  Flex,
  Box,
  Heading
} from '@chakra-ui/react';

export default function CompanyHoliday() {
  const history = useHistory();
  const employer = history.location.employer;  

  const [requests,setRequests] = useState([]);

      useEffect(()=>{
        fetch(`http://188.166.50.249/companies/${employer.id}/requests`).then(
          async response => {
            const data = await response.json();
            setRequests(data);
            console.log("data", data)
          }
        ).catch(error => {
          console.error('There was an error!', error);
        });
        
       },[requests])


  return (
    
      <Box d="flex" justifyContent="flex-start" flexDirection="column" bg="#E2E8F0" flex="1" alignItems="center" >
      
      <Box mb="8" mt="8"  >
      <Heading as="h2" size="2xl">
        Holidays requests
              </Heading>
              </Box>
              <Box d="flex" justifyContent="center" flexDirection="column" alignItems="center">
              {requests && requests.map((request)=>{
            return( 

      <Box mb="4" w="80%" boxShadow="lg" p="6" rounded="md" bg="white"> 
        <Text>{request.createdAt.slice(0,10)}</Text>
        <Text>Holiday Request</Text>
            <Text>{request.title}</Text>
            <Text>{request.description}</Text>
            <Text>From <Moment format="DD/MM/YYYY">{request.initDate}</Moment> To <Moment format="DD/MM/YYYY">{request.endDate}</Moment></Text>
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

      </Box>
            )

          })} 
       </Box>

    </Box>
  );
}
