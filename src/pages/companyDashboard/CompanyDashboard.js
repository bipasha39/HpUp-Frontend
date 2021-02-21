import React, { useState,useEffect } from 'react';
import PanelLeft from '../../components/panelLeft/PanelLeft';
import Dashboard from '../../components/dashboard/Dashboard';
import { useHistory } from "react-router-dom";

import { Box } from '@chakra-ui/react';



export default function CompanyPanelView() {
  const [users,setUsers] = useState([]);

  const history = useHistory();
  const employer = history.location.employer;  
  console.log("employer from company panel view", employer) 

   useEffect(()=>{
    fetch('http://188.166.50.249/users').then(
      async response => {
        const data = await response.json();
        setUsers(data);
        
      }
    ).catch(error => {
      console.error('There was an error!', error);
    });
    
   },[])

  return (
      <Box display="flex"  >
        <PanelLeft employer={employer} />
        <Dashboard users={users} />
      </Box>
   
  );
}
