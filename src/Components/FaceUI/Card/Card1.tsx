import { card_item, CartObjectType } from "../../../Type/types";
import Transform from "../../../Context/cartContext";
import { useContext, useEffect } from "react";
import { TransformCart } from "../../Index";
import CartContext from "../../../Context/cartContext";
const CardComponent = ({
  price,
  description,
  name,
  rate,
  image,
  Switch,
}: card_item) => {
  let { Cart, setCart } = useContext(CartContext);
  const rate_list = (mole: number) => {
    let rateBox = [];
    for (let i = 0; i < mole; i++) {
      rateBox.push(
        <i className="material-icons text-2xl text-orange-400" key={i}>
          &#xe838;
        </i>
      );
    }
    return rateBox;
  };
  return (
    <div
      className="flex flex-col items-center rounded-xl shadow p-4 bg-white dark:bg-gray-200 self-stretch relative
       sm:min-h-[200px] bg-opacity-40 sm:w-auto w-full"
    >
      <span
        className="fa text-3xl self-end place-self-end"
        id="span_start"
        onClick={(e) => {}}
      >
        &#xf006;
      </span>
      <div className="h-[65%] w-[65%] self-center items-end">
        <img
          src={image}
          alt="cardImage"
          className="w-5/6 mx-auto object-cover self-center h-full"
        />
      </div>
      <div className="flex flex-col items-center w-full justify-between h-full self-end">
        <p className="font-hev font-semibold text-center text-xl">
          {description}
        </p>
        <div className="flex flex-row items-center gap-2">
          {rate_list(Math.round(parseInt(rate))).map((item) => {
            return item;
          })}
        </div>
        <small className="text-base text-black text-center font-hev font-semibold">
          ${price}
        </small>
      </div>
      <button
        type={"button"}
        className={
          "block w-full rounded p-3 font-hev text-lg bg-gray-500 dark:bg-black text-white"
        }
        onClick={(e) => {
          if (Switch) {
            let AddCartArray = [...Cart.CartArray].concat([
              {
                index: Cart.CartItemID,
                ignore: false,
                Element: (
                  <TransformCart
                    name={name}
                    Switch={0}
                    id={Cart.CartItemID}
                    image={image}
                    price={price}
                    description={description}
                    rate={rate}
                  />
                ),
              },
            ]);
            setCart((prev: CartObjectType) => ({
              ...prev,
              CartArray: AddCartArray,
            }));
          }
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CardComponent;
