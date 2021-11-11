import React from 'react';
import { useLocation } from 'react-router-dom';
import MyComponent from './MyComponent.design';

const MyComponentFacade = () => {
  const location = useLocation();

  return (<MyComponent location={location} />);
}

export default MyComponentFacade;