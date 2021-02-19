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

export default function Dashboard(props) {

  return (
    <Box display="flex" flexDirection="column" flex="1" bg="#EDF2F7">
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
              </Th>
              <Th>Username</Th>
              <Th>Email</Th>
              <Th>Role</Th>
              <Th isNumeric>Remaining days</Th>
            </Tr>
          </Thead>
          <Tbody>
            {props.users.map(item => (
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
                <Td>{item.username}</Td>
                <Td>{item.email}</Td>
                <Td>{item.role}</Td>
                <Td isNumeric>{item.remainingDays}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}
