import React from 'react';

import { Button } from '@mui/material';

const OutlinedButton = ({ children, fontSize, paddingHorizontal, paddingVertical, fullWidth, width, ...props }) => {
  return (
    <Button
      fullWidth={fullWidth}
      {...props}
      sx={{
        borderRadius: '25px',
        fontFamily: 'Kanit',
        width: width,
        fontSize: fontSize,
        borderColor: 'white',
        paddingX: paddingHorizontal,
        paddingY: paddingVertical,
        color: 'white',
        ':hover': {
          textShadow: ' 0px 0px 11px rgba(255, 255, 255, 0.75)',
          borderColor: 'white',
        },
        ':active': {
          background: 'rgba(46, 98, 255, 0.1)',
          border: '0.5px solid #FFFFFF',
        },
      }}
      size="small"
      variant="outlined"
    >
      {children}
    </Button>
  );
};

export default OutlinedButton;
