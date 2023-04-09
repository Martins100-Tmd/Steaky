import CartContext from "../../../Context/cartContext";
import { useContext } from "react";
import { CartObjectType } from "../../Type/types";
const SideBarComponent = () => {
  let { Cart, setCart } = useContext(CartContext);
  let List = Cart.CartArray.map((item, index) => {
    if (!item.ignore) {
      return (
        <div key={index} className={"flex flex-col items-start relative my-1"}>
          {item.Element}
        </div>
      );
    }
  });
  return (
    <div className="h-screen flex flex-col items-center p-10 sm:bg-gray-200 w-full justify-between">
      <h1 className="text-2xl text-center place-self-center font-hev font-semibold h-[5%] uppercase">
        My Shopping Cart
      </h1>
      <div className="grid sm:grid-cols-4 grid-cols-3 items-center w-full">
        <p className="font-hev text-xl text-center flex justify-center w-full">
          Product
        </p>
        <p className="font-hev text-xl text-center flex justify-center w-full">
          Quantity
        </p>
        <p className="font-hev text-xl text-center flex justify-center w-full">
          Remove
        </p>
        <p className="font-hev text-xl text-center sm:flex justify-center w-full hidden">
          Price
        </p>
      </div>
      <div className="h-[1px] bg-gray-400 w-full mb-2"></div>
      <div className="h-[50%] overflow-scroll w-full grid grid-cols-1">
        {List}
      </div>
      <div className="h-[1px] bg-gray-400 w-full mb-2"></div>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-row items-center w-full justify-between">
          <p className="text-base text-gray-500 text-left font-hev">
            Sub Total
          </p>
          <p className="font-hev font-semibold text-lg">${Cart.CartSubTotal}</p>
        </div>
        <div className="flex flex-row items-center w-full justify-between mt-2.5">
          <p className="text-base text-gray-500 text-left font-hev">
            Delivery Fee
          </p>
          <p className="font-hev font-semibold text-lg">
            ${Cart.CartDeliveryFee}
          </p>
        </div>
        <div className="flex flex-row items-center border-2 border-orange-600 rounded-lg w-full p-2 justify-between bg-orange-100 mt-2">
          <p className="text-lg font-hev text-left">Find promotions</p>
          <button className="bg-orange-600 px-6 py-2.5 rounded flex flex-row items-center">
            <i className="material-icons text-xl text-white mr-2">&#xe56c;</i>
            <p className="font-hev text-base text-white">Add Coupon</p>
          </button>
        </div>
      </div>
      <div className="h-[1px] bg-gray-400 w-full my-2"></div>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-row items-center w-full justify-between">
          <p className="text-base font-hev text-gray-500 text-left">Total</p>
          <p className="font-hev font-semibold text-lg">${Cart.CartTotal}</p>
        </div>
        <button className="bg-orange-600 px-6 p-3 rounded block w-full">
          <p className="font-hev text-lg text-white">Check Out</p>
        </button>
      </div>
    </div>
  );
};

export default SideBarComponent;
