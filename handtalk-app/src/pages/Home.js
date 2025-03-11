import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="w-screen h-screen bg-blue-200 flex justify-center items-center">
        <div className="w-full max-w-screen-sm md:max-w-4xl px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 수어 번역 (Render) - 한 공간 넓게 차지 */}
          <Link to={'/Render'} className="w-full md:col-span-2">
            <button className="bg-white w-full h-52 p-5 rounded-3xl hover:bg-slate-300 border border-solid-black">
              수어 번역
            </button>
          </Link>

          {/* 기본 수어 (Nomal)과 수어 피드백 (Feedback) 양옆으로 배치 */}
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
      </div>
    </>
  );
}

export default Home;
