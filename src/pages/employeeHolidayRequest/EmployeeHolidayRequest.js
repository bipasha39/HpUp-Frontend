import React, { Fragment } from 'react';
import PanelLeft from '../../components/panelLeft/PanelLeft';
import EmployeeHoliday from '../../components/employeeHoliday/EmployeeHoliday';



import { Box } from '@chakra-ui/react';

export default function CompanyHoliday() {
  return (
      <Box display="flex"  >
        <PanelLeft />
        <EmployeeHoliday />
      </Box>
   
  );
}
