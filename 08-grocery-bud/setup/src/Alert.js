import React, { useEffect, useState } from 'react';

const Alert = ({ text, classs }) => {
  return <p className={`alert alert-${classs}`}>{text}</p>;
};

export default Alert;
