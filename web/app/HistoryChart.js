// components/HistoryChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const HistoryChart = ({ data }) => {
    return (
        <div>
            <h2>歷史紀錄圖表</h2>
            <Bar data={data} />
        </div>
    );
};

export default HistoryChart;


