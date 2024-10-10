// components/ImageDetails.js
import React from 'react';

const ImageDetails = ({ images }) => {
    return (
        <div>
            <h2>檢測到的猴子圖片</h2>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image.url} alt="Detected Monkey" />
                    <p>{image.details}</p>
                </div>
            ))}
        </div>
    );
};

export default ImageDetails;
