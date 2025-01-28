const NotFound = () => {
  return (
    <div className="bg-[#FEF2E8] h-screen flex flex-col justify-center items-center">
      <div className="w-full h-screen z-0 fixed pattern-dots pattern-zinc-300 pattern-bg-transparent pattern-opacity-60 pattern-size-4"></div>

      <div className="relative flex flex-col items-center justify-center ">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl font-bold">Not Found</p>
        <img className="w-24 my-5" src="/image/logo_kendi.svg" alt="" />
      </div>
    </div>
  );
};

export default NotFound;
