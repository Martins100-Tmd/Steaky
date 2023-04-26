import { card_item, CartObjectType } from "../../Type/types";
import { useContext } from "react";
import CartContext from "../../../Context/cartContext";
const CardComponent = ({
  price,
  name,
  rate,
  id,
  category,
  quantity,
  image,
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
      className={`flex flex-col items-center rounded-xl shadow p-4 bg-white dark:bg-gray-200 self-stretch relative
       sm:min-h-[200px] bg-opacity-40 sm:w-auto w-full`}
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
        <p className="font-hev font-semibold text-center text-xl">{name}</p>
        <div className="flex flex-row items-center gap-2">
          {rate_list(Math.round(rate))}
        </div>
        <small className="text-base text-black text-center font-hev font-semibold">
          ${price}
        </small>
      </div>
      <button
        type={"button"}
        className={`block w-full rounded p-3 font-hev text-lg bg-gray-500 dark:bg-gray-100 text-white shadow`}
        onClick={() => {
          let AddCartArray = [...Cart.CartArray].concat([
            {
              rate,
              price,
              image,
              name,
              id: `${Math.round(Math.random() * 76767)}`,
              category,
              quantity,
            },
          ]);
          setCart((prev: CartObjectType) => ({
            ...prev,
            CartArray: AddCartArray,
          }));
          let clone: any;
          clone = Object.assign(Cart.CartDuplicate, {});
          clone[name] = {
            frequency: 1,
            price,
          };
          setCart((prev: CartObjectType) => ({
            ...prev,
            CartDuplicate: clone,
          }));
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CardComponent;
