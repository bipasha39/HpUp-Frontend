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
  <Box display="flex" flexDirection="column" flex="1" p="10px" boxShadow="dark-lg" p="6" rounded="md" bg="Azure">
    <MenuItem icon={<DragHandleIcon />} route="/dashboard" title="My Profile" />
    <MenuHolidayItem icon={<UpDownIcon />} employer={employer} route="/holidaycom" title="Holidays" />
    <MenuItem icon={<InfoOutlineIcon />}  route ="/payroll"title=" Payroll" />
    <MenuItem icon={<ChatIcon />}  route ="/talent" title="Team" />
    <Divider />
    <MenuItem icon={<SettingsIcon />} route ="/settings" title="Setting" />
    <MenuItem icon={<SpinnerIcon />}  route ="/login"title="Logout" />
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
  console.log("employer from menu item__", props.employer) 

  return (
  <Box p="2" d="flex" alignItems="center" onClick={()=> history.push({pathname:'/holidaycom', employer:props.employer})}>
    {props.icon}
    <Text ml="4" >
    {props.title}
    </Text>
    
  </Box>

)};

      const Profile = () => (
        <Box p="4" mb="4" flexDirection="row" display="flex" boxShadow="md" p="6" rounded="md" bg="#192A3E" color="white">
          <Box mr="4" pl="2">
            <Avatar name="Segun Adebayo" src="https://www.janasebestovaphotography.com/wp-content/uploads/2018/04/30-3118-post/silvia-lopez_4630_LR(pp_w768_h768).jpg" />
          </Box>
          <Box  display="flex" flexDirection="column" >
            <Box>Silvia</Box>
            <Box><p>silv235@gmail.com</p></Box>
          </Box>
        </Box>
      );
      const Header = () => (
        <Box>
        <Link to="/login"><Heading colorScheme="CornflowerBlue" as="h6" size="xl" p="3" mb="2" color="#192A3E">
          HrUp
        </Heading></Link>
        </Box>
      );

      export default function PanelLeftEmployee({employer}) {
        console.log("employer from panel left", employer) 
        return (
          <Box pl="2" pr="2"display="flex" flexDirection="column" width="350px" height="100vh">
            <Header />
            <Profile />
            <MenuList employer={employer} />
            
          </Box>
        );
      }
