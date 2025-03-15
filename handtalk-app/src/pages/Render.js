import React, { useState } from "react";

const Render = () => {
  const [videoUrl, setVideoUrl] = useState(null);

  // 파일 선택 핸들러
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 p-6">
      {/* 실시간 수어 번역 */}
      <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg border border-gray-300">
        <h1 className="text-3xl font-bold text-black mb-6 text-center">
          실시간 수어 번역
        </h1>
        <div className="w-full max-w-2xl h-96 bg-gray-800 flex items-center justify-center rounded-lg shadow-md mb-4">
          <span className="text-white text-lg">카메라 화면</span>
        </div>
        <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md text-center border border-gray-300">
          <p className="text-lg font-semibold text-gray-800">번역 결과</p>
          <div className="text-xl font-bold text-black mt-2">
            여기에 번역된 텍스트 표시
          </div>
        </div>
      </div>

      {/* 구분선 */}
      <div className="border-l-2 h-full border-gray-300"></div>

      {/* 영상 업로드하여 번역 */}
      <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg border border-gray-300">
        <h1 className="text-3xl font-bold text-black mb-6 text-center">
          영상 번역
        </h1>
        {/* 파일 업로드 */}
        <div className="mb-6 text-center">
          <label
            htmlFor="file-upload"
            className="cursor-pointer bg-blue-500 text-white py-2 px-6 rounded-lg text-sm hover:bg-blue-600 transition-all"
          >
            파일 선택
          </label>
          <input
            id="file-upload"
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* 영상 화면 */}
        <div className="w-full max-w-2xl h-96 bg-gray-800 flex items-center justify-center rounded-lg shadow-md mb-4">
          {videoUrl ? (
            <video className="w-full h-full" controls>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <span className="text-white text-lg">업로드된 영상</span>
          )}
        </div>

        {/* 번역 결과 */}
        <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md text-center border border-gray-300">
          <p className="text-lg font-semibold text-gray-800">번역 결과</p>
          <div className="text-xl font-bold text-black mt-2">
            여기에 번역된 텍스트 표시
          </div>
        </div>
      </div>
    </div>
  );
};

export default Render;
