import React, { useState,useEffect } from 'react';
import PanelLeft from '../../components/panelLeft/PanelLeft';
import Dashboard from '../../components/dashboard/Dashboard';
import {getAllUsers}from "../../utils/mockApi";

// import './CompanyPanelView.css';


import { Box } from '@chakra-ui/react';



export default function CompanyPanelView() {
  const [users,setUsers] = useState([]);
   
   useEffect(()=>{
    getAllUsers().then(value =>{
      console.log("got all users")
      setUsers(value)
    })
     console.log("done")
   },[])

  return (
      <Box display="flex"  >
        <PanelLeft />
        <Dashboard users={users} />
      </Box>
   
  );
}
