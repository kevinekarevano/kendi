import { useParams } from "react-router";
import { foodData } from "../foodData";
import Marquee from "../components/ui/Marquee";
import ImageCard from "@/components/ui/ImageCard";
import { Link } from "react-router";

const DetailMenu = () => {
  const { id } = useParams();

  const data = foodData.find((data) => data.id === parseInt(id));

  if (!data) {
    return (
      <div className="bg-[#FEF2E8] h-screen flex  flex-col justify-center items-center">
        <img className="w-24 my-5" src="/image/logo_kendi.svg" alt="" />
        <h1 className="text-2xl font-bold">Tidak ada produk 🥲</h1>
      </div>
    );
  }

  return (
    <div className="bg-[#FEF2E8]  h-full">
      <div className="container p-5 flex justify-center ">
        <div className="flex flex-col justify-center items-center">
          <img src="/image/logo_kendi.svg" alt="" />

          <h1 className="text-2xl mb-7 font-bold">{data.name}</h1>
          <div className=" flex flex-col mb-7  justify-center items-center">
            <ImageCard price={data.price} caption={data.name} className={" mb-5"} imageUrl={data.imageUrl} />
            <p className="text-center font-medium">"{data.description}"</p>
          </div>

          <Link className="flex flex-col items-center" to={"/"}>
            <img className=" rotate-90 w-1/3  " src="/image/arrow.svg" alt="" />
            <p className="underline">Back To Menu</p>
          </Link>
        </div>
      </div>

      {/* <div className="md:hidden">
        <Marquee className="p-2" items={item} />
      </div> */}
    </div>
  );
};

export default DetailMenu;
