import { Hero1 } from "../../Index";
import { Link } from "react-router-dom";
const HeroComponent = () => {
  return (
    <>
      <div className="flex sm:flex-row sm:items-stretch items-center justify-between flex-col-reverse w-ninety mx-auto sm:mt-16 mt-10 gap-2">
        <div className="sm:w-2/5 flex flex-col sm:items-start items-center gap-7 self-start w-full ">
          <h1 className="text-6xl font-semibold font-hev sm:text-start text-center">
            We <span className="text-orange-400">Deliver</span> Food At Your
            Door Step
          </h1>
          <p className="text-base sm:text-start text-center font-hev text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            provident itaque ipsam veniam. Sapiente, odit...🙁
          </p>
          <Link
            to={"/MENU"}
            className="p-6 font-hev text-white rounded-xl bg-green-400 shadow-xl shadow-green-300/100 mt-3 sm:self-start self-center"
          >
            Get Started Now!
          </Link>
          <div className=" items-center w-full gap-5 mt-7 grid grid-cols-1">
            <p className="rounded p-1.5 shadow text-center flex flex-row sm:w-3/4 w-full items-center bg-green-50">
              <i className="fa w-12 h-8 mr-4 fa-2x text-green-600">&#xf058;</i>
              <span className="text-sm font-hev w-full text-left">
                There are over 500 recipes in our menu
              </span>
            </p>
            <p className="rounded p-1.5 shadow text-center flex flex-row sm:w-3/4 w-full items-center bg-green-50">
              <i className="fa w-12 h-8 mr-4 fa-2x text-green-600">&#xf058;</i>
              <span className="text-sm font-hev w-full text-left">
                Always fresh and healthy ingredients
              </span>
            </p>
            <p className="rounded p-1.5 shadow text-center flex flex-row sm:w-3/4 w-full items-center bg-green-50">
              <i className="fa w-12 h-8 mr-4 fa-2x text-green-600">&#xf058;</i>
              <span className="text-sm font-hev w-full text-left">
                Delivery is made five times a day
              </span>
            </p>
          </div>
        </div>
        <div className="sm:w-3/5 w-ninety mx-auto sm:self-center self-center sm:-mt-16 place">
          <img
            src={Hero1}
            alt="Food_delivery"
            className="object-cover sm:w-ninety w-full mx-auto"
          />
        </div>
      </div>
    </>
  );
};

export default HeroComponent;
