import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';  // 서비스 워커 파일 추가

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 서비스 워커 등록
serviceWorkerRegistration.register();  // PWA 기능 활성화

// 웹 성능 측정을 원하면 아래 코드 사용
reportWebVitals();
