
import React, {} from 'react';
import PanelLeft from '../../components/panelLeft/PanelLeft';
import CompanyHoliday from '../../components/companyHoliday/CompanyHoliday';
import { Box } from '@chakra-ui/react';
import { useHistory } from "react-router-dom";

export default function CompanyHolidayApproval() {
  const history = useHistory();
  const employer = history.location.employer;  
  console.log("employer in company hliday aprroval", employer)
  return (
      <Box display="flex"  >
        <PanelLeft />
        <CompanyHoliday employer={employer}/>
      </Box>
   
  );
}
