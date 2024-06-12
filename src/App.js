import React, { useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import AudienceForm from './components/AudienceForm';
import CampaignList from './components/CampaignList';
import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [campaigns, setCampaigns] = useState([]);

    const handleLogin = () => {
        // Simulate login
        setIsLoggedIn(true);
        setUserEmail('Sreshta@example.com');
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserEmail('');
    };

    const addCampaign = (campaign) => {
        setCampaigns([...campaigns, campaign]);
    };

    return (
        <div className="App">
            <Header isLoggedIn={isLoggedIn} userEmail={userEmail} handleLogout={handleLogout} />
            <main>
                {!isLoggedIn ? (
                    <Login handleLogin={handleLogin} />
                ) : (
                    <>
                        <AudienceForm addCampaign={addCampaign} />
                        <CampaignList campaigns={campaigns} />
                    </>
                )}
            </main>
        </div>
    );
}

export default App;
