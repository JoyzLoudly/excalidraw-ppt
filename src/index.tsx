import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css'

// 选择目标容器
const rootElement = document.getElementById('app');
// 扩展 Window 接口以包含 EXCALIDRAW_ASSET_PATH 属性
declare global {
  interface Window {
    EXCALIDRAW_ASSET_PATH: string;
  }
}
window.EXCALIDRAW_ASSET_PATH = "/";
// 检查元素是否存在
if (rootElement) {
    // 创建用于渲染的根节点
    const root = ReactDOM.createRoot(rootElement);
    // 渲染应用
    root.render(<App />);
} else {
    console.error('未找到 ID 为 "root" 的目标容器。');
}