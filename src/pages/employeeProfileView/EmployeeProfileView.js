import React, { Fragment } from 'react';
import PanelLeft from '../../components/panelLeft/PanelLeft';
import EmployeeProfile from '../../components/employeeProfile/EmployeeProfile';



import { Box } from '@chakra-ui/react';

export default function EmployeeProfileView() {
  return (
      <Box display="flex"  >
        <PanelLeft />
        <EmployeeProfile />
      </Box>
   
  );
}
