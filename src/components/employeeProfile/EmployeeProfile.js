// import React, {useState, useEffect} from 'react';
// import Moment from 'react-moment';
// import { BellIcon } from '@chakra-ui/icons';
// import {
//   Text,
//   Stack,
//   Image,
//   Button,
//   Flex,
//   Box,
//   Heading,
//   FormLabel,
//   Tabs,
//   TabList,
//   TabPanels,
//   Tab,
//   TabPanel,
//   FormControl,
//   Input,
//   InputGroup,
//   InputRightElement,
//   handleClick,
//   Divider,
//   Container,
//   show
// } from '@chakra-ui/react';


// export default function EmployeeProfile({ employee }) {
//   console.log('employee', employee);
  
//   const [showForm, setShowForm] = useState(false);
//   const [title, setTitle] = useState('');
//   const [initDate, setInitDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [description, setDescription] = useState('');


//   const [requests,setRequests] = useState([]);

//       useEffect(()=>{
//         fetch(`http://188.166.50.249/users/${employee.id}/requests`).then(
//           async response => {
//             const data = await response.json();
//             setRequests(data);
//             console.log("data", data)
//           }
//         ).catch(error => {
//           console.error('There was an error!', error);
//         });
        
//        },[requests])

//       const requestHoliday = (e) => {
//         const requestOptions = {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ 
//             initDate: initDate, 
//             endDate: endDate,
//             type: "holidays",
//             status: "open",
//             description: description,
//             title: title,
//             documentUrl: '',
//             userId: employee.id,
//             companyId: employee.companyId

//           })
//         };

        
//         fetch('http://188.166.50.249/hollyday', requestOptions)
//           .then(async response => {
//             const data = await response.json();
//             console.log("data from empoyee form ", data)
//             if (!response.ok) {
//               const error = (data && data.code);
//               return Promise.reject(error);
//             }
    
          
//           })
//           .catch(error => {
//             console.error('There was an error!', error);
//           });
//       }

  
//   return (
//     <Box bg="#E2E8F0" flex="1">
//       ​
//       <Box display="flex" justifyContent="center">
//         <Box
//           display="flex"
//           flex="1"
//           p="2"
//           maxW="1200px"
//           justifyContent="space-between"
//         >
//           <Heading color="Black" size="lg" fontSize="50px">
//             {/* {employee.name} */}
//           </Heading>
//           ​
//           <Box display="flex" alignItems="center">
//             <BellIcon color="grey" w={8} h={8} />
//           </Box>
//         </Box>
//       </Box>
//       ​
//       <Flex justifyContent="space-around" align="center" direction="row">
//         <Box display="flex" flexDirection="column" alignItems="center">
//           <Image
//             m="2"
//             boxSize="150px"
//             objectFit="cover"
//             src="https://thispersondoesnotexist.com/image"
//             alt="Segun Adebayo"
//           />
//           <Button w="170px" h="40px" colorScheme="blue" mb="2" onClick={()=>setShowForm(!showForm)}  >
//             Holiday Request
//           </Button>
//         </Box>
//         <Flex m="2" direction="column" w="20%">
//           <Stack justify="space-between" direction="row">
//             <Text fontSize="md">First Name:</Text>
//             <Text fontSize="md">{employee.firstName && employee.firstName}</Text>
//           </Stack>

//           <Stack justify="space-between" direction="row">
//             <Text fontSize="md">Last Name:</Text>
//             <Text fontSize="md">{employee.lastName}</Text>
//           </Stack>
        
      
//         </Flex>

//         <Flex
//           justify="space-between"
//           align="center"
//           direction="row"
//           border="2px"
//           borderColor="black"
//           w="40%"
//           p="5"
//         >

//           <Box
//             flex-direction="column"
//             justify-content="center"
//             textAlign="center"
//             w="100%"
//           >
//             <Text>Available Holidays</Text>
//             <Text>{employee.remainingDays} Remaining Days</Text>
//           </Box>
//           ​
        
//         </Flex>
//       </Flex>

//       { showForm && 

//       <Box p="6" mb="4" boxShadow="lg" p="6" rounded="md" bg="white">​
      
//       <Flex direction="row" justify="flex-start" m="3">
//         <FormControl id="title" isRequired width="25%" mr="2">
//           <FormLabel>Title</FormLabel>
//           <Input placeholder="Title" 
//           type="text"
//           value={title}
//           onChange={event => setTitle(event.target.value)}
//           aria-label="Title"
//           />
//         </FormControl>
//         <FormControl id="initDate" isRequired width="25%" mr="2">
//           <FormLabel>Init Date</FormLabel>
//           <Input placeholder="Init Date"
//           type="text"
//           value={initDate}
//           onChange={event => setInitDate(event.target.value)}
//           aria-label="Init Date"
//           />
//         </FormControl>

//         <FormControl id="endDate" isRequired width="25%" mr="2">
//           <FormLabel>End Date</FormLabel>
//           <Input placeholder="End Date"
//           type="text"
//           value={endDate}
//           onChange={event => setEndDate(event.target.value)}
//           aria-label="End Date"
//           />
//         </FormControl>

//       </Flex>
//       <Flex direction="column">
//         ​
//         <FormControl id="description" isRequired>
//           <FormLabel>Description</FormLabel>
//           <Input placeholder="Description"
//           type="text"
//           value={description}
//           onChange={event => setDescription(event.target.value)}
//           aria-label="Description"
//           />
//         </FormControl>
//         <Flex justify="flex-end">
//           <Button w="170px" h="40px" colorScheme="blue" m="10" onClick={requestHoliday} >
//             Submit
//           </Button>
//         </Flex>
//         ​
//       </Flex>
//       ​

//       </Box>
//       }


//      <Box d="flex" justifyContent="center" flexDirection="column" alignItems="center">
//         {requests && requests.map((request)=>{
//             return(
//               <Box mb="4" w="80%" boxShadow="lg" p="6" rounded="md" bg="white"> 
//               <Button backgroundColor={ request.status === "open" || request.status === "approved" ? "Green" : "Red"  } color="white">
//                {request.status}
//               </Button>
//               <Text></Text>
//               <Text fontWeight="bold">Holiday Request</Text>
//               <Text>Days Requested:</Text>
//               <Text>From <Moment format="DD/MM/YYYY">{request.initDate}</Moment> To <Moment format="DD/MM/YYYY">{request.endDate}</Moment></Text>
//               <Text>Description</Text>
//               <Text>
//               {request.description}
//               </Text>
//               ​
//               </Box>
//             )

//         })} 
//      </Box>
//           ​
          
         
//     </Box>
//   );
// }




import React, { useState, useEffect } from 'react';
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
  FormLabel,
  FormControl,
  Input,
} from '@chakra-ui/react';
export default function EmployeeProfile({ employee }) {
  console.log('employee', employee);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [initDate, setInitDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    fetch(`http://188.166.50.249/users/${employee.id}/requests`).then(
      async response => {
        const data = await response.json();
        setRequests(data);
        console.log("data", data)
      }
    ).catch(error => {
      console.error('There was an error!', error);
    });
  }, [requests])
  const requestHoliday = (e) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        initDate: initDate,
        endDate: endDate,
        type: "holidays",
        status: "open",
        description: description,
        title: title,
        documentUrl: '',
        userId: employee.id,
        companyId: employee.companyId
      })
    };
    fetch('http://188.166.50.249/hollyday', requestOptions)
      .then(async response => {
        const data = await response.json();
        console.log("data from empoyee form ", data)
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
    <Box bg="#E2E8F0" flex="1">
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
          <Box display="flex" alignItems="center">
            <BellIcon color="grey" w={8} h={8} />
          </Box>
        </Box>
      </Box>
      <Flex justifyContent="space-around" align="center" direction="row" mb="6">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image
            m="2"
            boxSize="150px"
            objectFit="cover"
            src="https://www.janasebestovaphotography.com/wp-content/uploads/2018/04/30-3118-post/silvia-lopez_4630_LR(pp_w768_h768).jpg"
            alt="Segun Adebayo"
          />
          <Button w="170px" h="40px" colorScheme="blue" mb="2" bg="#192A3E" onClick={() => setShowForm(!showForm)}  >
            Holiday Request
          </Button>
        </Box>
        
        <Flex m="2" direction="column" w="20%"  
            
            boxShadow="lg" p="6" rounded="md" bg="white" >
          <Stack justify="space-between" direction="row">
            <Text fontSize="md" fontWeight="bold">First Name:</Text>
            <Text fontSize="md">
              {/* {employee.firstName && employee.firstName} */}
              Silvia</Text>
          </Stack>
          <Stack justify="space-between" direction="row">
            <Text fontSize="md" fontWeight="bold">Last Name:</Text>
            <Text fontSize="md">{employee.lastName}</Text>
          </Stack>
        </Flex>
        
        <Flex
          justify="space-between"
          align="center"
          direction="row"
          w="40%"
          p="5"
        >
          <Box
            flex-direction="column"
            justify-content="center"
            textAlign="center"
            w="100%"
            boxShadow="lg" p="6" rounded="md" bg="white"
          >
            <Text fontWeight="bold" fontSize="xl">Available Holidays</Text>
            <Text fontWeight="bold" fontSize="xl">{employee.remainingDays} Remaining Days</Text>
          </Box>
        </Flex>
      </Flex>
      { showForm &&
        <Box p="6" mb="4" mt="4" w="80%" ml="auto" mr="auto" boxShadow="lg" p="6" rounded="md" bg="white">
          <Flex direction="row" justify="flex-start" m="3">
            <FormControl id="title" isRequired width="25%" mr="2">
              <FormLabel>Title</FormLabel>
              <Input placeholder="Title"
                type="text"
                value={title}
                onChange={event => setTitle(event.target.value)}
                aria-label="Title"
              />
            </FormControl>
            <FormControl id="initDate" isRequired width="25%" mr="2">
              <FormLabel>Init Date</FormLabel>
              <Input placeholder="Init Date"
                type="text"
                value={initDate}
                onChange={event => setInitDate(event.target.value)}
                aria-label="Init Date"
              />
            </FormControl>
            <FormControl id="endDate" isRequired width="25%" mr="2">
              <FormLabel>End Date</FormLabel>
              <Input placeholder="End Date"
                type="text"
                value={endDate}
                onChange={event => setEndDate(event.target.value)}
                aria-label="End Date"
              />
            </FormControl>
          </Flex>
          <Flex direction="column">
            <FormControl id="description" isRequired>
              <FormLabel>Description</FormLabel>
              <Input placeholder="Description"
                type="text"
                value={description}
                onChange={event => setDescription(event.target.value)}
                aria-label="Description"
              />
            </FormControl>
            <Flex justify="flex-end">
              <Button w="170px" h="40px" colorScheme="blue" m="10" onClick={requestHoliday} >
                Submit
          </Button>
            </Flex>
          </Flex>
        </Box>
      }
      <Box d="flex" justifyContent="center" flexDirection="column" alignItems="center">
        {requests && requests.map((request) => {
          return (
            <Box mb="4" w="80%" boxShadow="lg" p="6" rounded="md" bg="white" d="flex" justifyContent="space-around" flexDirection="row" >
              <Box flex="1">
                <Text></Text>
                <Text fontWeight="bold">Holiday Request</Text>
                <Text fontWeight="bold">Days Requested:</Text>
                <Text >From <Moment format="DD/MM/YYYY">{request.initDate}</Moment> To <Moment format="DD/MM/YYYY">{request.endDate}</Moment></Text>
                <Text fontWeight="bold">Description</Text>
                <Text>
                  {request.description}
                </Text>
              </Box>
              <Box>
                <Button backgroundColor={request.status === "open" || request.status === "approved" ? "Green" : "Red"} color="white">
                  {request.status}
                </Button>
              </Box>
            </Box>
          )
        })}
      </Box>
    </Box>
  );
} 