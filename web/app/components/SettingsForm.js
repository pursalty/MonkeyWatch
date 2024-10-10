// components/SettingsForm.js
import React, { useState } from 'react';

const SettingsForm = () => {
    const [cameraSettings, setCameraSettings] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // 處理設置提交
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>系統設置</h2>
            <label>
                攝影機設置:
                <input 
                    type="text" 
                    value={cameraSettings} 
                    onChange={(e) => setCameraSettings(e.target.value)} 
                />
            </label>
            <button type="submit">保存設置</button>
        </form>
    );
};

export default SettingsForm;


