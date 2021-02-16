import React, { Fragment } from 'react';
import PanelLeft from '../../components/panelLeft/PanelLeft';
import Holiday from '../../components/holiday/Holiday';



import { Box } from '@chakra-ui/react';

export default function CompanyHoliday() {
  return (
      <Box display="flex"  >
        <PanelLeft />
        <Holiday />
      </Box>
   
  );
}
