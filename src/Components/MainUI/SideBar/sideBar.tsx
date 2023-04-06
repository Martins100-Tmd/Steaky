import { Link } from "react-router-dom";
import CartContext from "../../../Context/cartContext";
import { useContext } from "react";
const SideBarComponent = () => {
  let { Cart } = useContext(CartContext);
  return (
    <div
      className={`flex sm:flex-col flex-row items-center w-full shadow-xl dark:bg-gray-200
       h-full`}
    >
      <div className="sm:flex flex-col items-start w-10 mt-10 hidden">
        <div className={`w-full h-[2px] bg-black font-black`}></div>
        <div className={`w-3/4 h-[2px] bg-black my-2 font-black`}></div>
        <div className={`w-1/2 h-[2px] bg-black font-black`}></div>
      </div>
      <div className="flex flex-col items-center w-full mt-20 h-[250px] justify-between">
        <Link to={"/"} className="fa text-3xl cursor-pointer">
          &#xf015;
        </Link>
        <div className="relative cursor-pointer" title={"Shopping Cart"}>
          <p className="text-lg font-pop absolute bottom-6 right-1">
            {Cart.CartArray.length}
          </p>
          <Link to={"/CART"} className="flex justify-center text-3xl fa">
            &#xf07a;
          </Link>
        </div>
        <i
          className="flex justify-center my-3 text-3xl fa cursor-pointer"
          title={"Favourites"}
        >
          &#xf0eb;
        </i>
        <i className="material-icons text-3xl cursor-pointer" title={"History"}>
          &#xe889;
        </i>
      </div>
    </div>
  );
};

export default SideBarComponent;
