import React, { useState } from 'react';

import { Box } from '@mui/material';

// Components 
import Header from '../Header';
import LeftSideBar from '../LeftSideBar';

// Images 
import bgImage from '../../assets/images/bg-img.png';


const Layout = ({ children }) => {

    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            backgroundImage: `url(${bgImage})`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'

        }} >
            <LeftSideBar />
            <Box width={"100%"}>
                <Header />
                <Box paddingX={4}
                    sx={{
                        overflowY: 'auto'
                    }}
                    height={"85vh"}
                   >
                    {children}
                </Box>
            </Box>

        </Box >
    )
}

export default Layout;