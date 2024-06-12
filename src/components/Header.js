import React from 'react';

const Header = ({ isLoggedIn, userEmail, handleLogout }) => {
    return (
        <header className="header">
            <h1>Mini CRM Application</h1>
            {isLoggedIn ? (
                <div className="user-info">
                    <span>{userEmail}</span>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <button className="login-btn">Login with Google</button>
            )}
        </header>
    );
};

export default Header;
