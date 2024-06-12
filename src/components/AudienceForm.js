import React, { useState } from 'react';

const AudienceForm = ({ addCampaign }) => {
    const [spend, setSpend] = useState('');
    const [visits, setVisits] = useState('');
    const [notVisited, setNotVisited] = useState('');
    const [audienceSize, setAudienceSize] = useState(null);

    const handleCheckSize = () => {
        // Simulate audience size calculation
        const size = Math.floor(Math.random() * 1000);
        setAudienceSize(size);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const campaignId = Math.floor(Math.random() * 100000);
        const sent = Math.floor(audienceSize * 0.9); // 90% sent
        const failed = audienceSize - sent;
        addCampaign({ campaignId, audienceSize, sent, failed });
        setSpend('');
        setVisits('');
        setNotVisited('');
        setAudienceSize(null);
    };

    return (
        <section className="audience-form">
            <h2>Create Audience</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Total Spends Greater Than:
                    <input type="number" value={spend} onChange={(e) => setSpend(e.target.value)} />
                </label>
                <label>
                    Maximum Visits:
                    <input type="number" value={visits} onChange={(e) => setVisits(e.target.value)} />
                </label>
                <label>
                    Not Visited In Last (Months):
                    <input type="number" value={notVisited} onChange={(e) => setNotVisited(e.target.value)} />
                </label>
                <button type="button" onClick={handleCheckSize}>Check Audience Size</button>
                {audienceSize !== null && <p>Estimated Audience Size: {audienceSize}</p>}
                <button type="submit">Save Audience</button>
            </form>
        </section>
    );
};

export default AudienceForm;
