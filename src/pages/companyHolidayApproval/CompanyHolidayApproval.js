
import React, {} from 'react';
import PanelLeft from '../../components/panelLeft/PanelLeft';
import CompanyHoliday from '../../components/companyHoliday/CompanyHoliday';



import { Box } from '@chakra-ui/react';

export default function CompanyHolidayApproval() {
  return (
      <Box display="flex"  >
        <PanelLeft />
        <CompanyHoliday />
      </Box>
   
  );
}
