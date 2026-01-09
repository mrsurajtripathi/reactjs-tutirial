import React from 'react';

const TabComponent = ({ name, onSelect }) => {
  return <button onClick={onSelect} className='btn btn-primary'>{name}</button>;
};

export default TabComponent;
