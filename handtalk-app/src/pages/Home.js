import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="w-screen bg-blue-200 flex justify-center items-center mb-20 relative">
      {isMobile ? (
        // 📱 모바일 버전: 기존 디자인 유지
        <div className="w-full max-w-screen-sm px-4 grid grid-cols-1 gap-6 m-2">
          <Link to={'/Render'} className="w-full">
            <button className="bg-white w-full h-52 p-5 rounded-3xl hover:bg-slate-300 border border-solid-black">
              수어 번역
            </button>
          </Link>
          <div className="flex w-full gap-6">
            <Link to={'/Nomal'} className="flex-1">
              <button className="bg-white w-full h-52 p-5 rounded-3xl hover:bg-slate-300 border border-solid-black">
                기본 수어
              </button>
            </Link>
            <Link to={'/Feedback'} className="flex-1">
              <button className="bg-white w-full h-52 p-5 rounded-3xl hover:bg-slate-300 border border-solid-black">
                수어 피드백
              </button>
            </Link>
          </div>
        </div>
      ) : (
        // 🖥️ 데스크탑 버전: 배열 변경
        <div className="w-full max-w-4xl px-4 grid gap-6">
          <Link to={'/Render'} className="grid">
            <button className="bg-white w-full h-52 p-5 rounded-3xl hover:bg-slate-300 border border-solid-black">
              수어 번역
            </button>
          </Link>
          <Link to={'/Nomal'}>
            <button className="bg-white w-full h-52 p-5 rounded-3xl hover:bg-slate-300 border border-solid-black">
              기본 수어
            </button>
          </Link>
          <Link to={'/Feedback'}>
            <button className="bg-white w-full h-52 p-5 rounded-3xl hover:bg-slate-300 border border-solid-black">
              수어 피드백
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
