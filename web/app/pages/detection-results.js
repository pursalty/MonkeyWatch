// pages/detection-results.js
import React from 'react';
import ImageDetails from '../components/ImageDetails'; // 確保導入正確
import HistoryChart from '../components/HistoryChart'; // 如果需要

const DetectionResults = () => {
    const images = [
        { url: 'image1_url.jpg', details: '檢測到的猴子 1' },
        { url: 'image2_url.jpg', details: '檢測到的猴子 2' },
    ];

    return (
        <div>
            <h1>影像分析結果</h1>
            <ImageDetails images={images} />
            {/* 如果需要，您可以添加歷史紀錄圖表 */}
            {/* <HistoryChart data={chartData} /> */}
        </div>
    );
};

export default DetectionResults;

