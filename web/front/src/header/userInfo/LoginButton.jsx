import React from 'react';
import GoogleLoginButton from '../../common/GoogleLoginButton';

const LoginButton = ({ isLoggedIn }) => {
	return (
		<div className='loginButton'>
			{isLoggedIn ? (<UserInfo />) : (<GoogleLoginButton />)}
		</div>
	);
};

const UserInfo = () => {
	return <h2>Welcome!</h2>;
};

export default LoginButton;
