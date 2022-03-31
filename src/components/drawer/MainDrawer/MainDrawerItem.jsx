import React from 'react';

export function MainDrawerItem({ isSelected, icon, onPress }) {
  return (
    <div
      style={{
        height: 40,
        display: 'flex',
        alignItems: 'center',
        marginRight: 32,
        marginTop: 16,
        marginBottom: 16,
      }}
      onClick={onPress}
    >
      {isSelected && (
        <div
          style={{
            width: 8,
            height: 40,
            background:
              'linear-gradient(131.78deg, #EEEEEE 12.72%, #D4C78C 21.39%, #DEBF70 34.64%, #AE9555 44.61%, #A78C47 57.04%)',
            display: 'list-item',
          }}
        />
      )}
      <div
        style={{
          flex: 1,
          textAlign: 'right',
          color: isSelected ? '#fff' : 'rgba(255, 255, 255, 0.5)',
        }}
      >
        {icon}
      </div>
    </div>
  );
}
