import CartContext from "../../../Context/cartContext";
import { useContext } from "react";
import { CartObjectType } from "../../../Type/types";
const SideBarComponent = () => {
  let { Cart, setCart } = useContext(CartContext);
  let List = Cart.CartArray.map((item, index) => {
    return (
      <div key={index} className={"flex flex-col items-start relative my-1"}>
        {item.Element}
      </div>
    );
  });
  return (
    <div className="h-screen flex flex-col items-center p-10 sm:bg-gray-200 w-full justify-between">
      <h1 className="text-2xl sm:text-left text-center sm:place-self-start place-self-center font-hev font-semibold h-[5%] capitalize">
        My orders
      </h1>
      <div className="flex flex-col sm:items-start items-center w-full place-content-center self-center">
        <h3 className="text-lg sm:text-start sm:place-self-start font-medium font-hev place-self-center text-center">
          Delivery Location
        </h3>
        <p className="text-3xl font-hev font-semibold sm:text-left sm:place-self-start my-2 text-center place-self-center">
          1341 Morris Street
        </p>
        <div className="flex flex-row items-center w-1/2 justify-between">
          <div className="flex flex-row items-center">
            <i className="fa text-2xl text-gray-500 mr-3">&#xf017;</i>
            <p className="text-base text-gray-500 font-hev">40 mins</p>
          </div>
          <div className="flex flex-row items-center">
            <i className="fa text-2xl text-gray-500 mr-3">&#xf041;</i>
            <p className="text-base text-gray-500 font-hev">4 kms</p>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-gray-400 w-full my-5"></div>
      <div className="flex flex-row items-center w-full justify-between">
        <p className="text-gray-500 font-hev text-xl w-1/2 border-b border-gray-500">
          Cart Items
        </p>
        <i
          className="fa text-gray-500 flex justify-end text-xl w-1/2"
          onClick={() => {
            Cart.CardDeleteSwitch || Cart.CartArray.length == 0
              ? setCart((prev: CartObjectType) => ({
                  ...prev,
                  CardDeleteSwitch: 0,
                }))
              : setCart((prev: CartObjectType) => ({
                  ...prev,
                  CardDeleteSwitch: 1,
                }));
          }}
        >
          &#xf014;
        </i>
      </div>
      <div className="h-[40%] overflow-y-scroll w-full grid sm:grid-cols-3 sm:gap-2 grid-cols-1">
        {List}
      </div>
      <div className="h-[1px] bg-gray-400 w-full my-5"></div>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-row items-center w-full justify-between">
          <p className="text-base text-gray-500 text-left font-hev">
            Sub Total
          </p>
          <p className="font-hev font-semibold text-lg">$340</p>
        </div>
        <div className="flex flex-row items-center w-full justify-between mt-5">
          <p className="text-base text-gray-500 text-left font-hev">
            Delivery Fee
          </p>
          <p className="font-hev font-semibold text-lg">$9</p>
        </div>
        <div className="flex flex-row items-center border-2 border-orange-600 rounded-lg w-full p-4 justify-between bg-orange-100 mt-6">
          <p className="text-lg font-hev text-left">Find promotions</p>
          <button className="bg-orange-600 px-6 py-3 rounded flex flex-row items-center">
            <i className="material-icons text-xl text-white mr-2">&#xe56c;</i>
            <p className="font-hev text-base text-white">Add Coupon</p>
          </button>
        </div>
      </div>
      <div className="h-[1px] bg-gray-400 w-full my-5"></div>
      <div className="flex flex-col items-center w-full mt-5">
        <div className="flex flex-row items-center w-full justify-between">
          <p className="text-base font-hev text-gray-500 text-left">Total</p>
          <p className="font-hev font-semibold text-lg">$349</p>
        </div>
        <button className="bg-orange-600 px-6 p-5 rounded block w-full">
          <p className="font-hev text-lg text-white">Check Out</p>
        </button>
      </div>
    </div>
  );
};

export default SideBarComponent;
