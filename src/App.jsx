import { Button } from "./components/ui/button";
import ImageCard from "./components/ui/imageCard";
import { foodData } from "./foodData";
import Form from "./components/Form";
import { useRef } from "react";
import Marquee from "./components/ui/Marquee";

function App() {
  const ref = useRef(null);

  const handleButton = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const item = [,"KENDI", ".", "KENDI", "." ,"KENDI", ".", "KENDI", "."];

  return (
    <div className="bg-[#FEF2E8]  h-full">
      <div className=" container p-5 flex justify-center items-center ">
        <div className="flex flex-col justify-center items-center">
          <img src="/image/logo_kendi.svg" alt="" />
          <h1 className="text-2xl font-bold">Welcome To Kendi</h1>

          <Button onClick={handleButton} className="font-bold px-10 mt-5">
            Pre Order Now!
          </Button>

          <h1 className="text-xl font-bold my-4 ">Our Menu's</h1>
          <img className="mb-5" src="/image/arrow.svg" alt="" />
          <div className="flex   justify-center  flex-wrap gap-4">
            {foodData.map((item, index) => {
              return <ImageCard key={index} caption={item.name} imageUrl={item.imageUrl} />;
            })}
          </div>

          <div ref={ref} id="form-order" className=" w-72 md:w-1/2 my-10">
            <Form />
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <Marquee className="p-2" items={item} />
      </div>
    </div>
  );
}

export default App;
