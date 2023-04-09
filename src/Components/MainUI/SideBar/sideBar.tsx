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
        <div className={`w-full h-[2px] bg-gray-500 font-black`}></div>
        <div className={`w-3/4 h-[2px] bg-gray-500 my-2 font-black`}></div>
        <div className={`w-1/2 h-[2px] bg-gray-500 font-black`}></div>
      </div>
      <div className="flex flex-col items-center w-full mt-20 h-[250px] justify-between">
        <Link to={"/"} className="fa text-3xl cursor-pointer text-gray-500">
          &#xf015;
        </Link>
        <Link
          className="relative cursor-pointer"
          title={"Shopping Cart"}
          to={"/CARTDESKTOP"}
        >
          <p>{Cart.CartArray.length}</p>
          <i className="flex justify-center text-3xl fa text-gray-500">
            &#xf07a;
          </i>
        </Link>
        <i
          className="flex justify-center my-3 text-3xl fa cursor-pointer text-gray-500"
          title={"notifications"}
        >
          &#xf0f3;
        </i>
        <i
          className="material-icons text-3xl cursor-pointer text-gray-500"
          title={"History"}
        >
          &#xe889;
        </i>
      </div>
    </div>
  );
};

export default SideBarComponent;
