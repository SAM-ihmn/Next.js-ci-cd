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
        <>
          <Drawer
            anchor={'right'}
            open={state}
            onClose={handleClose}
            sx={{
              '& .mui-1160xiw-MuiPaper-root-MuiDrawer-paper ': {
                width: {
                  xs: '75%',
                  md: '30%'
                }
              },
            }}
          >
            {children}
          </Drawer>
        </>
    </div>
  );
}