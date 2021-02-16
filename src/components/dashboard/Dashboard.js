import React, { useState } from 'react';
import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  show,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  Avatar,
  AvatarBadge,
  Spacer,
  Divider,
  WrapItem,
} from '@chakra-ui/react';
import { Link, render } from 'react-router-dom';
import { SearchIcon,BellIcon} from '@chakra-ui/icons';
const data = [
  {
    avatar: '',
    name: 'George Fields',
    email: 'bips@gail.com',
    companyName: 'Bips',
    role: 'Manager',
    forecast: '50%',
    recentActivity: '1 hour ago',
  },
  {
    name: 'Lindey Stroud',
    email: 'bips@gmail.com',
    companyName: 'Wirehouse',
    role: 'Manager',
    forecast: '50%',
    recentActivity: '1 hour ago',
  },
  {
    name: 'Farhana',
    email: 'bips@gmail.com',
    companyName: 'Cable',
    role: 'Manager',
    forecast: '50%',
    recentActivity: '1 hour ago',
  },
  {
    name: 'Rebeca More',
    email: 'bips@gmail.com',
    companyName: 'Tablet',
    role: 'Manager',
    forecast: '50%',
    recentActivity: '1 hour ago',
  },
  {
    name: 'Jane Doe',
    email: 'bips@gmail.com',
    companyName: 'Desktop',
    role: 'Manager',
    forecast: '50%',
    recentActivity: '1 hour ago',
  },
  {
    name: 'Jones Dermot',
    email: 'bips@gmail.com',
    companyName: 'Laptop',
    role: 'Manager',
    forecast: '50%',
    recentActivity: '1 hour ago',
  },
  {
    name: 'Martin Merces',
    email: 'bips@gmail.com',
    companyName: 'Zoom',
    role: 'Manager',
    forecast: '50%',
    recentActivity: '1 hour ago',
  },
  {
    name: 'Franz Ferdinand',
    email: 'bips@gmail.com',
    companyName: 'Trello',
    role: 'Manager',
    forecast: '50%',
    recentActivity: '1 hour ago',
  },
  {
    name: 'John Smith',
    email: 'bips@gmail.com',
    companyName: 'Facebook',
    role: 'Manager',
    forecast: '50%',
    recentActivity: '1 hour ago',
  },
  {
    name: 'Gullem Gabril',
    email: 'bips@gmail.com',
    companyName: 'Slack',
    role: 'Manager',
    forecast: '50%',
    recentActivity: '1 hour ago',
  },
];

export default function Dashboard() {
  return (
    <Box display="flex" flexDirection="column" flex="1" bg="#F7FAFC">
      <Box p="10" display="flex" flexDirection="row">
        <Box flex="2">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input type="text" placeholder="search" />
          </InputGroup>
        </Box>
        <Box>
        <BellIcon color="grey" w={8} h={8}/>
        </Box>
      </Box>
      <Box p="10"> filter
      {/* {data.filter(name => name.includes('H')).map(filteredName => (
        <li>
          {filteredName}
        </li>
      ))} */}
      </Box>
      <Box p="10" flex="1">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>
                <Checkbox></Checkbox>
                Name
              </Th>
              <Th>Email</Th>
              <Th>Company Name</Th>
              <Th>Role</Th>
              <Th>Forecast</Th>
              <Th>Recent Activity</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(item => (
              <Tr>
                <Td>
                  <Box
                 flex="1"
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignContent="center"
                  >
                    <Box display="flex" justifyContent="space-between" >
                      <Checkbox spacing="10rem"></Checkbox>
                      <Avatar size="2xs" />
                      {item.avatar}
                    </Box>
                   
                    <Box>
                      <b> {item.name}</b>
                    </Box>
                  </Box>
                </Td>
                <Td>{item.email}</Td>
                <Td>{item.companyName}</Td>
                <Td>{item.role}</Td>
                <Td>{item.forecast}</Td>
                <Td>{item.recentActivity}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}
