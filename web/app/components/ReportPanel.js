// components/ReportPanel.js
import React from 'react';

const ReportPanel = ({ reports }) => {
    return (
        <div>
            <h2>報告面板</h2>
            <p>近期警報次數：{reports.length}</p>
            <ul>
                {reports.map((report, index) => (
                    <li key={index}>{report.time}: {report.count}次警報</li>
                ))}
            </ul>
        </div>
    );
};

export default ReportPanel;

