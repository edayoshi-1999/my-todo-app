//tailwindが効くかどうかのテストページ

import React from 'react';

const TestPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500">Tailwind CSS Test Page</h1>
      <p className="mt-4 text-lg text-gray-700">
        このページはTailwind CSSが正しく動作しているかを確認するためのテストページです。
      </p>
      <button
        type="button"
        className="px-4 py-2 mt-6 text-white bg-blue-500 rounded hover:bg-blue-600"
        > 
        テストボタン
      </button>
    </div>
  );
};

export default TestPage;