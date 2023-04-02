import { Link } from "react-router-dom";
import Transform from "../../../Context/Transform";
import { useContext } from "react";
const SideBarComponent = () => {
  let { transform } = useContext(Transform);
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
      <div
        className="flex flex-col items-center w-full mt-20 h-[250px] justify-between"
        title={"Shopping Cart"}
      >
        <div className="relative">
          <p className="text-lg font-pop absolute bottom-6 right-1">
            {transform.length}
          </p>
          <Link to={"/CART"} className="flex justify-center text-3xl fa">
            &#xf07a;
          </Link>
        </div>
        <i className="flex justify-center my-3 text-3xl fa" title={"Eye Care"}>
          &#xf0eb;
        </i>
        <i className="fa text-3xl">&#xf147;</i>
        <Link to={"/"} className="fa text-3xl">
          &#xf015;
        </Link>
      </div>
    </div>
  );
};

export default SideBarComponent;
