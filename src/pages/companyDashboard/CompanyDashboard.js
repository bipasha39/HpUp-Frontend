import React, { Fragment } from 'react';
import PanelLeft from '../../components/panelLeft/PanelLeft';
import Dashboard from '../../components/dashboard/Dashboard';


// import './CompanyPanelView.css';


import { Box } from '@chakra-ui/react';

export default function CompanyPanelView() {
  return (
      <Box display="flex"  >
        <PanelLeft />
        <Dashboard />
      </Box>
   
  );
}
