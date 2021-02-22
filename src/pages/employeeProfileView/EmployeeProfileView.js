import React, { useState,useEffect } from 'react';
import { useHistory } from "react-router-dom";
import PanelLeftEmployee from '../../components/panelLeftEmployee/PanelLeftEmployee';
import EmployeeProfile from '../../components/employeeProfile/EmployeeProfile';



import { Box } from '@chakra-ui/react';

export default function EmployeeProfileView() {
  const history = useHistory();
  const employee = history.location.employee;  
  return (
      <Box display="flex"  >
        <PanelLeftEmployee />
        <EmployeeProfile employee={employee} />
      </Box>
   
  );
}