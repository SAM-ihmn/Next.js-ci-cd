import * as React from 'react';
import Drawer from '@mui/material/Drawer';


type handleDrawerType = {
  state : boolean,
  handleClose: () => void,
  children: React.ReactNode
}

export default function RightDrawer({state, handleClose, children} : handleDrawerType) {


  return (
    <div>
        <React.Fragment >
          <Drawer
            anchor={'right'}
            open={state}
            onClose={handleClose}
            sx={{
              '& .css-1160xiw-MuiPaper-root-MuiDrawer-paper ': {
                width: '75%'
              }
            }}
          >
            {children}
          </Drawer>
        </React.Fragment>
    </div>
  );
}