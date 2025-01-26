import { foodData } from "../foodData";
import ImageCard from "./ui/ImageCard";
import { Link } from "react-router";
const Menu = () => {
  return (
    <div className="flex   justify-center  flex-wrap gap-4">
      {foodData.map((item, id) => {
        return (
          
          <Link key={id} to={`/detail/${item.id}`}>
            <ImageCard className="cursor-pointer hover:scale-95 transition-all duration-300 hover:bg-orange-200" price={item.price} title={item.name} caption={item.name} imageUrl={item.imageUrl} />
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
