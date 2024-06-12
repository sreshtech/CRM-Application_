import React from 'react';

const Login = ({ handleLogin }) => {
    return (
        <div className="login">
            <button onClick={handleLogin}>Login with Google</button>
        </div>
    );
};

export default Login;
