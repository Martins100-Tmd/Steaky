import { Link } from "react-router-dom";
import Transform from "../../../Context/Transform";
import { useContext } from "react";
const BSideBarComponent = () => {
  let { transform } = useContext(Transform);
  return (
    <div
      className={`flex flex-row justify-between items-center w-full shadow-xl bg-white dark:bg-gray-200 py-5 px-3 duration-500
       h-full`}
    >
      <div className="sm:flex flex-col items-start w-10 mt-10 hidden">
        <div className={`w-full h-[2px] bg-black font-black`}></div>
        <div className={`w-3/4 h-[2px] bg-black my-2 font-black`}></div>
        <div className={`w-1/2 h-[2px] bg-black font-black`}></div>
      </div>
      <div className="relative flex flex-col">
        <p className="text-lg font-pop absolute bottom-4 left-4">
          {transform.length}
        </p>
        <Link to={"/CART"} className="flex justify-center text-3xl fa relative">
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
  );
};

export default BSideBarComponent;
