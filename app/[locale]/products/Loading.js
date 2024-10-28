import React from 'react';
const Loading = () => (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
    <div className=" p-8 flex flex-col items-center">
      <div className="relative">
        <div className="w-24 h-24 border-4 border-green-200 rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-primary rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-lg font-semibold text-primary">جار عرض التفاصيل ...</p>
    </div>
  </div>
);

export default Loading;