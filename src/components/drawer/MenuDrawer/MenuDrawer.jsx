import React, { useState } from 'react';
import { Drawer, Box, useMediaQuery } from '@mui/material';
import { MenuDrawerItem } from './MenuDrawerItem';
import imgNode from '../../../assets/images/nodes.png';
import imgInvestment from '../../../assets/images/investment.png';
import imgFarm from '../../../assets/images/farm.png';
import imgFaq from '../../../assets/images/faq.png';
import imgDashboard from '../../../assets/images/dashboard.png';
import { useNavigate } from 'react-router-dom';
import imgDiscord from '../../../assets/images/LeftBar/discord.png';
import imgTwitter from '../../../assets/images/LeftBar/twitter.png';
import imgStack from '../../../assets/images/LeftBar/stack.png';
import imgBubble from '../../../assets/images/LeftBar/bubble.png';
export function MenuDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    {
      label: 'dashboard',
      icon: <img alt="drawerIcon" src={imgDashboard} width={'20px'} />,
      navigateTo: '/',
    },
    {
      label: 'my nodes',
      icon: <img alt="drawerIcon" src={imgNode} width={'20px'} />,
      navigateTo: '/nodes',
    },
    {
      label: 'investments',
      icon: <img alt="drawerIcon" src={imgInvestment} width={'20px'} />,
      navigateTo: '/investment',
    },
    {
      label: 'FARM',
      icon: <img alt="drawerIcon" src={imgFarm} width={'20px'} />,
      navigateTo: '/farm',
    },
    {
      label: 'faq',
      icon: <img alt="drawerIcon" src={imgFaq} width={'20px'} />,
      navigateTo: '/faq',
    },
  ];
  const socialMediaIcons = [
    <img alt="drawerIcon" src={imgDiscord} width={'20px'} />,
    <img alt="drawerIcon" src={imgTwitter} width={'20px'} />,
    <img alt="drawerIcon" src={imgStack} width={'20px'} />,
    <img alt="drawerIcon" src={imgBubble} width={'20px'} />,
  ];
  const mobileCardView = useMediaQuery('(max-width:500px)');

  return (
    <Box display="flex">
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: isOpen ? 208 : 69,
            marginLeft: mobileCardView ? '0px' : '88px',
            background: 'rgba(13, 16, 27, 0.65)',
          },
        }}
        open={isOpen}
        onTouchStart={() => {
          setIsOpen(true);
        }}
        onMouseEnter={() => {
          setIsOpen(true);
        }}
        onTouchEnd={() => {
          setIsOpen(false);
        }}
        onMouseLeave={() => {
          setIsOpen(false);
        }}
      >
        <div
          style={{
            marginTop: 163,
            color: '#fff',
            marginBottom: 93,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <div>
            {menuItems.map((item, index) => (
              <MenuDrawerItem
                key={`${item.label}`}
                icon={item.icon}
                label={item.label}
                isExpanded={isOpen}
                navigateTo={item.navigateTo}
                onPress={() => {
                  navigate(item.navigateTo, { replace: true });
                }}
              />
            ))}
          </div>
          <div>
            {isOpen && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginLeft: 24,
                  marginRight: 24,
                  color: 'rgba(255, 255, 255, 0.24)',
                }}
              >
                {socialMediaIcons.map((icon) => (
                  <div
                    style={{
                      marginRight: 8,
                      marginLeft: 8,
                      height: 24,
                      width: 24,
                    }}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Drawer>
    </Box>
  );
}
