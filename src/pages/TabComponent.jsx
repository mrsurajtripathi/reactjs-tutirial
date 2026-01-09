import React from 'react';

const TabComponent = ({ name, onSelect }) => {
  return <button onClick={onSelect}>{name}</button>;
};

export default TabComponent;
