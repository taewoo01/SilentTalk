// src/serviceWorkerRegistration.js

// 서비스 워커 등록 함수
// 이 코드는 기본적으로 CRA에서 제공하는 코드입니다.

const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
      window.location.hostname === '[::1]' ||
      window.location.hostname === '127.0.0.1'
  );
  
  export function register(config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      // 서비스 워커가 있는지 확인하고 등록
      const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
      if (publicUrl.origin !== window.location.origin) {
        // 다른 도메인에서 실행 시 서비스 워커 등록 방지
        return;
      }
  
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        if (isLocalhost) {
          // 로컬 환경에서는 서비스 워커가 존재하는지 확인 후 동작
          checkValidServiceWorker(swUrl, config);
        } else {
          // 서비스 워커 등록
          registerValidSW(swUrl, config);
        }
      });
    }
  }
  
  function registerValidSW(swUrl, config) {
    navigator.serviceWorker
      .register(swUrl)
      .then(registration => {
        console.log('서비스 워커가 등록되었습니다:', registration);
        if (config && config.onSuccess) {
          config.onSuccess(registration);
        }
      })
      .catch(error => {
        console.error('서비스 워커 등록 실패:', error);
        if (config && config.onError) {
          config.onError(error);
        }
      });
  }
  
  function checkValidServiceWorker(swUrl, config) {
    // 서비스 워커가 존재하는지 확인하는 함수
    fetch(swUrl)
      .then(response => {
        // 서비스 워커 파일이 존재하면 등록
        if (response.status === 404 || response.type === 'error') {
          // 서비스 워커가 없으면 등록하지 않음
          navigator.serviceWorker.ready.then(registration => {
            registration.unregister();
          });
        } else {
          // 서비스 워커 파일이 있으면 등록
          registerValidSW(swUrl, config);
        }
      })
      .catch(() => {
        console.log('서비스 워커 확인 실패');
      });
  }
  
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready
        .then(registration => {
          registration.unregister();
        })
        .catch(error => {
          console.error(error.message);
        });
    }
  }
  