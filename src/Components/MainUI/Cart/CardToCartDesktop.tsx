import { useState } from "react";
import CartContext from "../../../Context/cartContext";
import { useContext } from "react";
import { card_item, CartObjectType } from "../../Type/types";
const CardToCardComponent = ({ image, name, category, price }: card_item) => {
  let [count, setcount] = useState(1);
  let { Cart, setCart, ComputedFees } = useContext(CartContext);
  return (
    <div className="flex flex-row items-center w-full border-b border-gray-100 my-4 justify-between">
      <div className="flex flex-row items-center w-[40%]">
        <img
          src={image}
          className={
            "object-cover sm:w-[80px] sm:h-[80px] w-[60px] h-[60px] mr-3"
          }
          alt={"product_image"}
        />
        <div className="flex flex-col items-start gap-2">
          <p className="text-xl font-semibold font-hev">{name}</p>
          <small className="font-hev text-left">{category}</small>
          <i className="fa text-red-400 text-xl text-left">&#xf00d;</i>
        </div>
      </div>
      <div className="flex flex-row items-center w-[30%]  mx-auto">
        <div className="w-[30px] h-[30px] border border-gray-100 flex justify-center">
          <i
            className="fa text-base cursor-pointer text-gray-600 self-center place-self-center"
            onClick={() => {
              let clone: any;
              count === 1 ? setcount(count) : setcount(count - 1);
              if (Cart.CartDuplicate[name]) {
                clone = Object.assign(Cart.CartDuplicate, {});
                if (count > 1) {
                  clone[name] = {
                    frequency: count - 1,
                    price,
                  };
                }
                setCart((prev: CartObjectType) => ({
                  ...prev,
                  CartDuplicate: clone,
                }));
              }
              console.log(ComputedFees());
            }}
          >
            &#xf068;
          </i>
        </div>
        <div className="w-[30px] h-[30px] p-2 flex bg-slate-800 rounded-sm justify-center">
          <p className="flex justify-center self-center text-center font-hev font-semibold text-lg mt-1 text-white">
            {count}
          </p>
        </div>
        <div className="w-[30px] h-[30px] border border-gray-100 flex justify-center">
          <i
            className="fa text-base cursor-pointer text-gray-600 self-center place-self-center"
            onClick={() => {
              let clone: any;
              setcount(count + 1);
              if (Cart.CartDuplicate[name]) {
                clone = Object.assign(Cart.CartDuplicate, {});
                clone[name] = {
                  frequency: count + 1,
                  price,
                };
                setCart((prev: CartObjectType) => ({
                  ...prev,
                  CartDuplicate: clone,
                }));
              } else {
                clone = Object.assign(Cart.CartDuplicate, {});
                clone[name] = {
                  frequency: count + 1,
                  price,
                };
                setCart((prev: CartObjectType) => ({
                  ...prev,
                  CartDuplicate: clone,
                }));
              }
              console.log(ComputedFees());
              console.log(Cart.CartDuplicate[name]);
            }}
          >
            &#xf067;
          </i>
        </div>
      </div>
      <div className="container w-[15%] mr-0 flex justify-center">
        <p className="font-hev text-lg font-medium">${price}</p>
      </div>
      <div className="container w-[15%] mr-0 flex justify-center">
        <p className="text-center font-hev text-base font-semibold">
          $
          {Cart.CartDuplicate[name] === undefined
            ? 0
            : Cart.CartDuplicate[name].price *
              Cart.CartDuplicate[name].frequency}
        </p>
      </div>
    </div>
  );
};

export default CardToCardComponent;
