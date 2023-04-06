import { useState } from "react";
import CartContext from "../../Context/cartContext";
import { useContext } from "react";
import { TransformCart } from "../../Components/Index";
import { CartObjectType, CartItemsObj, card_item } from "../../Type/types";
const CardToCardComponent = ({
  image,
  description,
  id,
  name,
  price,
}: card_item) => {
  let [count, setcount] = useState(1);
  let { Cart, setCart } = useContext(CartContext);
  return (
    <>
      <div
        className={
          "grid grid-cols-4 gap-2 border-b border-gray-400 w-full items-center bg-opacity-70 sm:p-4 overflow-scroll"
        }
      >
        <div className="flex sm:flex-row flex-col items-center">
          <img
            src={image}
            className={
              "object-cover sm:w-[65px] w-[80px] h-auto rounded-t-xl mr-5 sm:ml-0 mx-auto"
            }
            alt={"cart_image"}
            width={70}
            height={70}
          />
          <div className="flex flex-col sm:items-start sm:mt-5 items-center justify-center mt-0">
            <p className="font-hev sm:text-left sm:place-self-start w-full text-lg font-bold place-self-center text-center">
              {name}
            </p>
            <p className="text-sm sm:text-left font-hev text-center">
              {description}
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center place-content-end mt-5 justify-center sm:w-auto">
          <div
            className="flex dark:bg-slate-800 bg-black text-white font-hev font-bold sm:px-6
             sm:py-3.5 justify-center border border-gray-400 px-4 py-2"
            onClick={() => {
              count === 1 ? setcount(count) : setcount(count - 1);
            }}
          >
            <p className="flex justify-center self-center place-self-center text-xl cursor-pointer">
              -
            </p>
          </div>
          <div className="flex font-hev font-bold sm:px-7 sm:py-4 border-y border-gray-400 justify-center px-4 py-2.5">
            <p className="flex justify-center self-center place-self-center text-center">
              {count}
            </p>
          </div>
          <div
            className="flex dark:bg-gray-300 bg-black text-white font-hev font-bold sm:px-6 sm:py-3.5 border px-4 py-2
             border-gray-400 justify-center"
            onClick={() => setcount(count + 1)}
          >
            <p className="flex justify-center self-center place-self-center text-xl cursor-pointer">
              +
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <i
            className="fa text-base py-3.5 px-6 border border-gray-500 cursor-pointer"
            onClick={() => {
              let NewCartArray: CartItemsObj[] = [];
              Cart.CartArray.forEach((item: any) => {
                if (item.Element.props.id !== id) {
                  NewCartArray.push(item);
                }
              });
              setCart((prev: CartObjectType) => ({
                ...prev,
                CartArray: NewCartArray,
                CartTrigger: 1,
              }));
            }}
          >
            &#xf00d;
          </i>
        </div>
        <div className="flex justify-center">
          <p className="text-xl font-semibold text-center font-hev">${price}</p>
        </div>
      </div>
    </>
  );
};

export default CardToCardComponent;
