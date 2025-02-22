import { Button } from "../components/ui/button";
import Form from "../components/Form";
import { useEffect, useRef, useState } from "react";
import Marquee from "../components/ui/Marquee";
import Menu from "../components/Menu";
import moment from "moment";

const item = [, "KENDI", ".", "KENDI", ".", "KENDI", ".", "KENDI", "."];

function Home() {
  const [currentTime, setCurrentTime] = useState(moment().format("HH:mm A"));
  const ref = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format("HH:mm A"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleButton = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#FEF2E8]  h-full relative">
      <div className="fixed flex justify-center items-center z-50 bg-opacity-90 w-full h-screen bg-black">
        <div className="flex flex-col items-center">
          <img className="" src="/image/logo_kendi.svg" alt="" />
          <h1 className="text-4xl te font-bold text-yellow-600 my-4">Terima Kasih !</h1>
          <p className="text-white  text-center  font-light px-2 md:w-1/2   ">
            Kami mengucapkan terima kasih yang sebesar-besarnya atas partisipasi dan dukungan Anda dalam acara Business Day <span className="font-bold">Kendi</span> (Kedai N'Cang Yadi). Penjualan kami telah{" "}
            <span className="font-bold">sukses</span> dilaksanakan dan kami sangat menghargai setiap pembelian yang Anda lakukan. Terima Kasih.
          </p>
        </div>
      </div>
      <div className="w-full h-screen z-0 fixed pattern-dots pattern-zinc-300 pattern-bg-transparent pattern-opacity-60 pattern-size-4"></div>

      {/* <a target="_blank" href="https://wa.me/6281211545130?text=Halo%20saya%20ingin%20order%20di%20KENDI.">
        <div className="fixed right-5 opacity-95  transition-all animate-bounce  bottom-[85px] border-2 border-black  rounded-tr-3xl rounded-l-2xl  rounded-br-none bg-green-300 p-2 z-50">
          <p className="font-semibold md:text-base text-xs">Kontak disini</p>
        </div>

        <div className="fixed shadow md:right-4 shadow-zinc-600 animate-bounce rounded-full w-14 p-3 z-50 right-1 bottom-5">
          <img className="w-8 h-8" src="image/wa_logo.png" alt="" />
        </div>
      </a> */}

      <div className="md:hidden">
        <Marquee className="p-2" items={item} />
      </div>

      <div className="relative z-10 container p-5 flex justify-center items-center ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl underline-offset-8 underline font-bold text-zinc-900 my-5">{currentTime}</h1>
          <img src="/image/logo_kendi.svg" alt="" />
          <h1 className="text-2xl font-bold">Welcome To Kendi</h1>
          <Button onClick={handleButton} className="font-bold px-10 mt-5">
            Pre Order Now!
          </Button>

          <h1 className="text-xl font-bold my-4 ">Our Menu's</h1>
          <img className="mb-5" src="/image/arrow.svg" alt="" />

          <Menu />

          <h2 className="mt-7 text-2xl  font-semibold">Order di sini.. 😎</h2>
          <img className="w-6 mt-5 mb-5" src="image/arrow.svg" alt="" />

          <div ref={ref} id="form-order" className=" w-72 md:w-1/2 mb-10 ">
            <Form />
          </div>
        </div>
      </div>
      <footer className="flex justify-center relative pb-2 items-center">
        <code className="text-xs md:text-sm">
          Made by <span className="italic ">12 Teknik Komputer & Jaringan 1</span>{" "}
        </code>
      </footer>

      <div className="md:hidden">
        <Marquee className="p-2" items={item} />
      </div>
    </div>
  );
}

export default Home;
