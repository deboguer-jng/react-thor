import { Typography } from '@mui/material';
import React from 'react';
import { useMatch, useResolvedPath } from 'react-router-dom';

export function MenuDrawerItem({
  label,
  icon,
  isExpanded,
  onPress,
  navigateTo,
}) {
  const resolved = useResolvedPath(navigateTo);
  const isSelected = useMatch({ path: resolved.pathname, end: true });
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 16,
      }}
      onClick={onPress}
    >
      <div
        style={{
          background: isSelected
            ? 'linear-gradient(90deg, #2E62FF 26.2%, #4B24DC 100%)'
            : undefined,
          height: 40,
          width: isExpanded ? 190 : 40,
          borderRadius: 21,
          display: 'flex',
          alignItems: 'center',
          justifyContent: isExpanded ? undefined : 'center',
        }}
      >
        <div
          style={{
            marginRight: isExpanded ? 12 : 'inherit',
            marginLeft: isExpanded ? 12 : 'inherit',
            color: isSelected ? '#fff' : 'rgba(255, 255, 255, 0.5)',
            height: 32,
            alignItems: 'center',
            display: 'flex',
          }}
        >
          {icon}
        </div>
        {isExpanded && (
          <Typography
            style={{
              textTransform: 'uppercase',
              marginRight: 32,
              fontSize: '16px',
              fontWeight: 500,
              height: 32,
              alignItems: 'center',
              display: 'flex',
            }}
          >
            {label}
          </Typography>
        )}
      </div>
    </div>
  );
}
