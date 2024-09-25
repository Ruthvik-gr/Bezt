"use client"

const Loading = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center top-[200px]">
      <div className="h-12 w-12 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
}

export default Loading;