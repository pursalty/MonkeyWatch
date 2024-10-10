// components/Home.js
import React from 'react';
import VideoStream from './VideoStream';
import AlertNotifications from './AlertNotifications';
import ReportPanel from './ReportPanel';

const Home = () => {
    const alerts = [
        { message: '猴子入侵!', time: '2024-10-10 10:00' },
        { message: '再次入侵!', time: '2024-10-10 10:05' },
    ];
    const reports = [
        { count: 1, time: '2024-10-10 10:00' },
        { count: 1, time: '2024-10-10 10:05' },
    ];

    return (
        <div>
            <h1>系統概述</h1>
            <VideoStream />
            <AlertNotifications alerts={alerts} />
            <ReportPanel reports={reports} />
        </div>
    );
};

export default Home;
