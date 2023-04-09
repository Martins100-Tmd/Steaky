import { Link } from "react-router-dom";
import CartContext from "../../../Context/cartContext";
import { useContext } from "react";
const BSideBarComponent = () => {
  let { Cart } = useContext(CartContext);
  return (
    <div
      className={`flex flex-row justify-between items-center w-full shadow-xl bg-gray-200 py-5 px-3 duration-500
       h-full`}
    >
      <div className="sm:flex flex-col items-start w-10 mt-10 hidden">
        <div className={`w-full h-[2px] bg-black font-black`}></div>
        <div className={`w-3/4 h-[2px] bg-black my-2 font-black`}></div>
        <div className={`w-1/2 h-[2px] bg-black font-black`}></div>
      </div>
      <div className="relative flex flex-col">
        <p className="text-lg font-pop absolute bottom-4 left-4">
          {Cart.CartArray.length}
        </p>
        <Link
          to={"/CARTDESKTOP"}
          className="flex justify-center text-3xl fa relative"
        >
          &#xf07a;
        </Link>
      </div>
      <i
        className="flex justify-center my-3 text-3xl fa"
        title={"notifications"}
      >
        &#xf0f3;
      </i>
      <i className="fa text-3xl">&#xf147;</i>
      <Link to={"/"} className="fa text-3xl">
        &#xf015;
      </Link>
    </div>
  );
};

export default BSideBarComponent;
