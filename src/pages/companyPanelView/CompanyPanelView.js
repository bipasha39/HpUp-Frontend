import React, { Fragment } from 'react';
import PanelLeft from '../../components/panelLeft/PanelLeft';
import PanelRight from '../../components/panelRight/PanelRight';


// import './CompanyPanelView.css';


import { Box } from '@chakra-ui/react';

export default function CompanyPanelView() {
  return (
    <Fragment>
      <Box display="flex" flex="2" alignItems="center" justifyContent="center">
        <PanelLeft />
        <PanelRight />
      </Box>
    </Fragment>
  );
}
