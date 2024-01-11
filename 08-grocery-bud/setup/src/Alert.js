import React, { useEffect } from 'react';

const Alert = ({ msg, type, setAlert }) => {
	useEffect(() => {
		const timeout = setTimeout(() => {
			setAlert({ show: false, msg: '', type: '' });
		}, 3000);
		return () => clearTimeout(timeout);
	}, []);
	return <p className={`alert ${type}`}>{msg}</p>;
};

export default Alert;
