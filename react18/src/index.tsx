/*
 * @Author: ZY
 * @Date: 2022-11-23 16:17:51
 * @LastEditors: ZY
 * @LastEditTime: 2023-01-28 11:19:47
 * @FilePath: /wujie-apps/react18/src/index.tsx
 * @Description: 文件描述
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./pages/app";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
 <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
