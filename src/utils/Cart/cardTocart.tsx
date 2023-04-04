import { useState } from "react";
import CartContext from "../../Context/cartContext";
import { useContext } from "react";
import { CartObjectType, CartItemsObj } from "../../Type/types";
const CardToCardComponent = ({
  image,
  description,
  rate,
  price,
  id,
}: {
  image: string;
  description: string;
  rate: string;
  price: string;
  id: string;
}) => {
  let [count, setcount] = useState(1);
  let { Cart, setCart } = useContext(CartContext);
  return (
    <>
      <div
        className={
          Cart.CardDeleteSwitch
            ? "flex flex-row rounded-t-md w-full items-start bg-white justify-between shadow bg-opacity-70 p-2"
            : "flex flex-row rounded-md w-full items-start bg-white justify-between shadow bg-opacity-70 p-2"
        }
      >
        <div className="flex flex-row items-center w-[70%] justify-between">
          <img
            src={image}
            className={"object-cover w-[50px] h-auto rounded-t-xl"}
            alt={"cart_image"}
            width={70}
            height={70}
          />
          <div className="flex flex-col items-start mt-2">
            <p className="font-hev text-left place-self-start w-full text-lg font-bold">
              {description}
            </p>
            <p className="text-sm text-left font-hev">{price}</p>
          </div>
        </div>
        <div className="flex flex-row items-center w-1/4 place-content-end mt-5">
          <i
            className="fa text-2xl font-thin text-gray-400 cursor-pointer"
            onClick={() => {
              count === 1 ? setcount(count) : setcount(count - 1);
            }}
          >
            &#xf056;
          </i>
          <p className="text-xl font-medium font-hev mx-2.5">{count}</p>
          <i
            className="fa text-2xl font-thin text-gray-400 cursor-pointer"
            onClick={() => {
              setcount(count + 1);
            }}
          >
            &#xf055;
          </i>
        </div>
      </div>
      <div
        className={
          Cart.CardDeleteSwitch
            ? "w-full bg-green-400 p-0.5 text-center font-hev text-white rounded-b-md font-semibold cursor-pointer"
            : "hidden"
        }
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
          }));
        }}
      >
        Delete
      </div>
    </>
  );
};

export default CardToCardComponent;
