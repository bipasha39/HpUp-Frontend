import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import {
  Text,
  Stack,
  Image,
  Button,
  Flex,
  Box,
  Heading
} from '@chakra-ui/react';

export default function CompanyHoliday({ employer }) {
  console.log('emplyer in company holiday', employer)


  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch(`http://188.166.50.249/companies/${employer.id}/requests`).then(
      async response => {
        const data = await response.json();
        setRequests(data);
        console.log("data", data)
      }
    ).catch(error => {
      console.error('There was an error!', error);
    });

  }, [requests])

  const handleHolidayRequest = (holidaysRequest, status) => {
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        initDate: "2021-02-13 17:50:37",
        endDate: "2021-02-13 17:50:37",
        type: "holidays",
        status: status,
        title: holidaysRequest.title,
        description: holidaysRequest.description,
        documentUrl: "",
        userId: holidaysRequest.userId,
        companyId: holidaysRequest.companyId,
      })
    };
    console.log('holiday request___', requestOptions)

    fetch(`http://188.166.50.249/hollyday/${holidaysRequest.id}`, requestOptions)
      .then(async response => {
        const data = await response.json();
        console.log("Holiday requested is___________ ", data)
        if (!response.ok) {
          const error = (data && data.code);
          return Promise.reject(error);
        }
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }

  return (

    <Box d="flex" justifyContent="flex-start" flexDirection="column" bg="#E2E8F0" flex="1" alignItems="center" >

      <Box mb="8" mt="8"  >
        <Heading as="h2" size="2xl">
          Holidays requests
              </Heading>
      </Box>
      <Box d="flex" justifyContent="center" flexDirection="column" alignItems="center">
        {requests && requests.map((request) => {
          return (

            <Box mb="4" w="80%" boxShadow="lg" p="6" rounded="md" bg="white">
              <Text>{request.createdAt.slice(0, 10)}</Text>
              <Text>STATUS: {request.status}</Text>
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
                  onClick={() => handleHolidayRequest(request, "approved")}
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
                  onClick={() => handleHolidayRequest(request, "declined")}
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
