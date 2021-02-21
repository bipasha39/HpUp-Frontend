import React, { } from 'react';
import { Box, Divider, Heading, Avatar,Text } from '@chakra-ui/react';
import { Link, useHistory } from 'react-router-dom';
import {
  DragHandleIcon,
  EmailIcon,
  ChatIcon,
  SettingsIcon,
  UpDownIcon,
  ExternalLinkIcon,
  SpinnerIcon,
  InfoOutlineIcon,
  ArrowRightIcon,
} from '@chakra-ui/icons';


const MenuList = ({employer}) => (
  <Box display="flex" flexDirection="column" flex="1" p="10px">
    <MenuItem icon={<DragHandleIcon />} route="/dashboard" title="Dashboard" />
    <MenuHolidayItem icon={<UpDownIcon />} employer={employer} route="/holidaycom" title="Holidays" />
    <MenuItem icon={<InfoOutlineIcon />}  route ="/payroll"title="Payroll" />
    <MenuItem icon={<ChatIcon />}  route ="/talent" title="Talent Acusition Team" />
    <Divider />
    <MenuItem icon={<SettingsIcon />} route ="/settings" title="Setting" />
    <MenuItem icon={<SpinnerIcon />}  route ="/logout"title="Logout" />
  </Box>
);

const MenuItem = props => (
  <Box p="2" d="flex" alignItems="center" as={Link} to={props.route}>
    {props.icon}
    <Text ml="4" >
    {props.title}
    </Text>
    
  </Box>
);

const MenuHolidayItem = (props) =>{
  const history = useHistory();
  return (
  <Box p="2" d="flex" alignItems="center" as={Link} to={props.route} onClick={()=> history.push({pathname:'/dashboard', employer:props.employer})}>
    {props.icon}
    <Text ml="4" >
    {props.title}
    </Text>
    
  </Box>

)};

const Profile = () => (
  <Box p="4" mb="4" flexDirection="row" display="flex">
    <Box mr="4" pl="2">
      <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
    </Box>
    <Box  display="flex" flexDirection="column">
      <Box>Siara fergusan</Box>
      <Box>siarafergusan@gmail.com</Box>
    </Box>
  </Box>
);
const Header = () => (
  <Heading colorScheme="CornflowerBlue" as="h6" size="s" p="10">
    Best Company Ltd
  </Heading>
);

export default function PanelLeft({employer}) {
  console.log("employer from panel left", employer) 
  return (
    <Box pl="2" pr="2"display="flex" flexDirection="column" width="350px" height="100vh">
      <Header />
      <Profile />
      <MenuList employer={employer} />
      
    </Box>
  );
}
