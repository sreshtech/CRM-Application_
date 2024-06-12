import React from 'react';

const CampaignList = ({ campaigns }) => {
    return (
        <section className="campaigns">
            <h2>Past Campaigns</h2>
            <table>
                <thead>
                    <tr>
                        <th>Campaign ID</th>
                        <th>Audience Size</th>
                        <th>Sent</th>
                        <th>Failed</th>
                    </tr>
                </thead>
                <tbody>
                    {campaigns.map((campaign, index) => (
                        <tr key={index}>
                            <td>{campaign.campaignId}</td>
                            <td>{campaign.audienceSize}</td>
                            <td>{campaign.sent}</td>
                            <td>{campaign.failed}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default CampaignList;

