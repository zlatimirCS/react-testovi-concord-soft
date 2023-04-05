import React from 'react';
import { useGlobalContext } from './context';

const Alert = () => {
  const { alertMessage } = useGlobalContext();
  return <p className={'alert ' + alertMessage.type}>{alertMessage.message}</p>;
};

export default Alert;
