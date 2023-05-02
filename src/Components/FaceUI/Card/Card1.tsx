import { card_item, CartObjectType } from "../../Type/types";
import { useContext } from "react";
import CartContext from "../../../Context/cartContext";

//global styling for Card1.tsx
//Form of props: nameOfElementDataname_elementTag_style
const this_style = {
  mother_div_style: `flex flex-col items-center rounded-xl shadow p-4 bg-white dark:bg-gray-200 self-stretch relative
       sm:min-h-[200px] bg-opacity-40 sm:w-auto w-full`,
  rateIcon_span_style: "fa text-3xl self-end place-self-end",
  image_div_style: "h-[65%] w-[65%] self-center items-end",
  image_style: "w-5/6 mx-auto object-cover self-center h-full",
  description_div_style: "flex flex-col items-center w-full justify-between h-full self-end",
  description_para_style: "font-hev font-semibold text-center text-xl",
  rating_div_style: "flex flex-row items-center gap-2",
  price_small_style: "text-base text-black text-center font-hev font-semibold",
  addtocart_btn_style: `block w-full rounded p-3 font-hev text-lg bg-gray-500 dark:bg-gray-100 text-white shadow`,
};

//Default Component
const CardComponent = ({ price, name, rate, id, category, quantity, image }: card_item) => {
  let { Cart, setCart } = useContext(CartContext);
  const rate_list = (mole: number) => {
    let rateBox = [];
    for (let i = 0; i < mole; i++) {
      rateBox.push(
        <i className='material-icons text-2xl text-orange-400' key={i}>
          &#xe838;
        </i>
      );
    }
    return rateBox;
  };
  return (
    <div className={this_style.mother_div_style} data-name='mother_div'>
      <span
        className={this_style.rateIcon_span_style}
        data-name='rateIcon'
        id='span_start'
        onClick={(e) => {}}
      >
        &#xf006;
      </span>
      <div className={this_style.image_div_style} data-name='image_div'>
        <img src={image} alt='cardImage' data-name='image' className={this_style.image_style} />
      </div>
      <div className={this_style.description_div_style} data-name='description_div'>
        <p className={this_style.description_para_style} data-name='description_para'>
          {name}
        </p>
        <div className={this_style.rating_div_style} data-name='rating_div'>
          {rate_list(Math.round(rate))}
        </div>
        <small className={this_style.price_small_style} data-name='description_small'>
          ${price}
        </small>
      </div>
      <button
        type={"button"}
        className={this_style.addtocart_btn_style}
        data-name='description_btn'
        onClick={() => {
          let id = `${Math.round(Math.random() * 76767)}`;
          let AddCartArray = [...Cart.CartArray].concat([
            {
              rate,
              price,
              image,
              name,
              id,
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
