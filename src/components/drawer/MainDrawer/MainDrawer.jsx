import { Drawer } from '@mui/material';
import React, { useState } from 'react';
import { MainDrawerItem } from './MainDrawerItem';
import imgHammer from '../../../assets/images/LeftBar/Bitmap.png';
import imgThunder from '../../../assets/images/LeftBar/Bitmap-1.png';
export function MainDrawer() {
  const [selectedItem, setSelectedItem] = useState(1);
  const menuItems = [
    {
      id: 1,
      icon: <img src={imgHammer} alt="hammer" width={40} />,
    },
    {
      id: 2,
      icon: <img src={imgThunder} alt="thunder" width={40} />,
    },
    {
      id: 3,
      icon: <img src={imgThunder} alt="thunder" width={40} />,
    },
  ];
  return (
    <div>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 88,
            background: 'linear-gradient(180deg, #0E111C 0%, #11141D 100%)',
          },
        }}
        open
      >
        <div
          style={{
            marginTop: 150,
            color: '#fff',
          }}
        >
          {menuItems.map((item) => (
            <MainDrawerItem
              icon={item.icon}
              isSelected={item.id === selectedItem}
              onPress={() => setSelectedItem(item.id)}
            />
          ))}
        </div>
      </Drawer>
    </div>
  );
}
