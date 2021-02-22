import React, {} from 'react';
import PanelLeft from '../../components/panelLeft/PanelLeft';
import EmployeeHoliday from '../../components/employeeHoliday/EmployeeHoliday';
import { useHistory } from "react-router-dom";



import { Box } from '@chakra-ui/react';

export default function CompanyHoliday() {
  const history = useHistory();
  const employer = history.location.employer;
  return (
      <Box display="flex"  >
        <PanelLeft employer={employer}/>
        <EmployeeHoliday />
      </Box>
   
  );
}
