import React, { useState } from 'react';
import {
  FormControl,
  Input,
  Box,
  InputGroup,
  InputRightElement,
  handleClick,
  Button,
  Flex,
  Divider,
  Heading,
  EditIcon,
  Avatar,
  AvatarBadge,
  Text,
  show,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { DragHandleIcon,
  EmailIcon,
  ChatIcon,
  SettingsIcon,
  UpDownIcon,
  ExternalLinkIcon,
  SpinnerIcon,
  InfoOutlineIcon,
  ArrowRightIcon } from '@chakra-ui/icons'

const Footer = () => (
  <Box  p="10px">
     <MenuItem  icon={<ArrowRightIcon />} title="Toggle sidebar"/>
  </Box>
);
const MenuList = () => (
  <Box  display="flex" flexDirection ="column"flex="1" p="10px">
    <MenuItem  icon={<DragHandleIcon />} route="/dashboard"title="Dashboard"/>
    <MenuItem icon={<UpDownIcon />} route="/holidaycom" title="Holidays" />
    <MenuItem icon={<EmailIcon />} title="Email" />
    <MenuItem icon={<InfoOutlineIcon />}title="Contact" />
    <MenuItem icon={<ChatIcon />}title="Chat" />
    <MenuItem icon={<ExternalLinkIcon />}title="Deals" />
    <Divider />
    <MenuItem  icon={<SettingsIcon />}title="Setting" />
    <MenuItem icon={<SpinnerIcon />}title="Logout" />
  </Box>
);

const MenuItem = props => <Box p="10px" as={Link} to={props.route}>
  {props.icon}
  {props.title}
  
  </Box>;

const Profile = () => (
  <Box p="10px" flexDirection="row" display="flex">
    <Box flex="1">
      <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
    </Box>
    <Box flex="1" display="flex" flexDirection="column">
      <Box>Siara fergusan</Box>
      <Box>siarafergusan@gmail.com</Box>
    </Box>
  </Box>
);
const Header = () => (
  <Heading colorScheme="CornflowerBlue" as="h6" size="s" p="10px">
    Best Company Ltd
  </Heading>
);

export default function PanelLeft() {
  return (
    <Box display="flex" flexDirection="column" width="350px" height="100vh">
      <Header />
      <Profile />
      <MenuList />
      <Footer />
    </Box>
  );
}
