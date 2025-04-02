import React from 'react'
import 'antd/es/style/reset.css';
 import { ConfigProvider } from 'antd';
function UIProvider({ children }) {
    return (
        <div>
            <ConfigProvider>{children}</ConfigProvider>

        </div>
    )
}

export default UIProvider
