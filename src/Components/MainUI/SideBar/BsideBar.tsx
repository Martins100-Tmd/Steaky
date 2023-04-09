import { Link } from "react-router-dom";
import CartContext from "../../../Context/cartContext";
import { useContext } from "react";
const BSideBarComponent = () => {
  let { Cart } = useContext(CartContext);
  return (
    <div
      className={`flex flex-row justify-between items-center w-full shadow-xl dark:bg-gray-100 bg-black bg-opacity-90 dark:bg-opacity-100 py-5 px-3 duration-500
       h-full`}
    >
      <div className="relative flex flex-col">
        <p className="text-lg font-pop absolute bottom-4 left-4 dark:text-gray-600 text-white">
          {Cart.CartArray.length}
        </p>
        <Link
          to={"/CARTDESKTOP"}
          className="flex justify-center text-3xl fa relative dark:text-gray-600 text-white"
        >
          &#xf07a;
        </Link>
      </div>
      <i
        className="flex justify-center my-3 text-3xl fa dark:text-gray-600 text-white"
        title={"notifications"}
      >
        &#xf0f3;
      </i>
      <i className="fa text-3xl dark:text-gray-600 text-white">&#xf147;</i>
      <Link to={"/"} className="fa text-3xl dark:text-gray-600 text-white">
        &#xf015;
      </Link>
    </div>
  );
};

export default BSideBarComponent;
