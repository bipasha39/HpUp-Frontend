import React, { } from 'react';
import { Box, Heading, Avatar } from '@chakra-ui/react';
import {
  DragHandleIcon,
  EmailIcon,
  ChatIcon,
  SettingsIcon,
  UpDownIcon,
 
  SpinnerIcon,
 
  ArrowRightIcon,
} from '@chakra-ui/icons';

const Footer = () => (
  <Box p="10px">
    <MenuItem icon={<ArrowRightIcon />} title="under Construction" />
  </Box>
);
const MenuList = () => (
  <Box display="flex" flexDirection="column" flex="1" p="10px">
    <MenuItem icon={<DragHandleIcon />}  title="Profile" />
    <MenuItem icon={<UpDownIcon />} title="under construction" />
    <MenuItem icon={<EmailIcon />} title="under construction" />
    <MenuItem icon={<ChatIcon />} title="under construction" />
    <MenuItem icon={<SettingsIcon />} title="under construction" />
    <MenuItem icon={<SpinnerIcon />} title="under construction" />
  </Box>
);

const MenuItem = props => (
  <Box p="10px">
    {props.icon}
    {props.title}
  </Box>
);

const Profile = () => (
  <Box p="10px" flexDirection="row" display="flex">
    <Box flex="1">
      <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
    </Box>
    <Box flex="1" display="flex" flexDirection="column">
      <Box>New Namne</Box>
      <Box>newname@gmail.com</Box>
    </Box>
  </Box>
);
const Header = () => (
  <Heading colorScheme="CornflowerBlue" as="h6" size="s" p="10px">
    Under Construction
  </Heading>
);

export default function UnderConstruction() {
  return (
    <Box display="flex" flexDirection="column" width="350px" height="100vh">
      <Header />
      <Profile />
      <MenuList />
      <Footer />
    </Box>
  );
}
