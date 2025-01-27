import { Button } from "../components/ui/button";
import ImageCard from "../components/ui/ImageCard";
import Form from "../components/Form";
import { useRef } from "react";
import Marquee from "../components/ui/Marquee";
import Menu from "../components/Menu";

const item = [, "KENDI", ".", "KENDI", ".", "KENDI", ".", "KENDI", "."];

function Home() {
  const ref = useRef(null);

  const handleButton = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#FEF2E8]  h-full relative">
      <div className="w-full h-screen z-0 fixed pattern-dots pattern-zinc-300 pattern-bg-transparent pattern-opacity-60 pattern-size-4"></div>

      <div className="fixed shadow md:right-4 shadow-zinc-600 animate-bounce rounded-full w-14 p-3 z-50 right-1 bottom-5">
        <img src="image/wa_logo.png" alt="" />
      </div>
      <div className="md:hidden">
        <Marquee className="p-2" items={item} />
      </div>

      <div className="relative z-10 container p-5 flex justify-center items-center ">
        <div className="flex flex-col justify-center items-center">
          <img src="/image/logo_kendi.svg" alt="" />
          <h1 className="text-2xl font-bold">Welcome To Kendi</h1>
          <Button onClick={handleButton} className="font-bold px-10 mt-5">
            Pre Order Now!
          </Button>

          <h1 className="text-xl font-bold my-4 ">Our Menu's</h1>
          <img className="mb-5" src="/image/arrow.svg" alt="" />
          <Menu />

          <div ref={ref} id="form-order" className=" w-72 md:w-1/2 my-10">
            <Form />
          </div>
        </div>
      </div>

      <footer className="flex justify-center pb-2 items-center">
        <code className="text-sm">Made By 12 Teknik Komputer & Jaringan</code>
      </footer>

      <div className="md:hidden">
        <Marquee className="p-2" items={item} />
      </div>
    </div>
  );
}

export default Home;
