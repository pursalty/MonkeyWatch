// components/AlertNotifications.js
import React from 'react';

const AlertNotifications = ({ alerts }) => {
    return (
        <div>
            <h2>猴子入侵警告</h2>
            <ul>
                {alerts.map((alert, index) => (
                    <li key={index}>{alert.message} - {alert.time}</li>
                ))}
            </ul>
        </div>
    );
};

export default AlertNotifications;
