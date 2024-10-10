// components/VideoStream.js
import React from 'react';

const VideoStream = () => {
    return (
        <div>
            <h2>實時視訊流</h2>
            <video autoPlay controls>
                <source src="your-video-stream-url" type="video/mp4" />
                您的瀏覽器不支持視頻標籤。
            </video>
        </div>
    );
};

export default VideoStream;
