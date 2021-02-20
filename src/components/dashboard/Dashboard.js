import React from 'react';
import {
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { SearchIcon, BellIcon, ChevronDownIcon } from '@chakra-ui/icons';
import "./dashboard.css";

export default function Dashboard(props) {
  console.log('user', props.users);
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
          <BellIcon color="grey" w={8} h={8} />
        </Box>
      </Box>
      <Box ml="8">
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Company
          </MenuButton>
          <MenuList>
            <MenuItem>All</MenuItem>
            <MenuItem>Name</MenuItem>
            <MenuItem>Role</MenuItem>
            <MenuItem>Activity</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box p="10" flex="1">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th> </Th>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
              <Th>Company</Th>
              <Th isNumeric>Remaining days</Th>
            </Tr>
          </Thead>
          <Tbody>
            {props.users.map(item => (
              <Tr className="employee-row">
                <Td>
                  <Box
                    flex="1"
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignContent="center"
                  >
                    <Box display="flex" justifyContent="space-between">
                      
                      <Avatar size="sm" src="https://thispersondoesnotexist.com/image" />
                      
                    </Box>             
                  </Box>
                </Td>
                <Td>{item.firstName}</Td>
                <Td>{item.lasName}</Td>
                <Td>{item.email}</Td>
                <Td>{item.role}</Td>
                <Td>{item.company}</Td>

                <Td isNumeric>{item.remainingDays}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
}
