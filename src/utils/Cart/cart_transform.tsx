import { card_item } from "../../Type/types";

const CartTransform = ({
  image,
  description,
  rate,
  price,
}: {
  image: string;
  description: string;
  rate: string;
  price: string;
}) => {
  return (
    <div className="flex flex-row rounded-xl w-full items-start bg-white bg-opacity-25">
      <img
        src={image}
        className={"object-cover w-2/5 h-auto rounded-t-xl"}
        alt={"cart_image"}
      />
      <div className="flex flex-col items-start w-full h-full justify-center">
        <p className="font-hev text-left place-self-start w-full text-xl font-semibold">
          {description}
        </p>
        <div className="flex flex-row items-center w-2/5 justify-between">
          <p className="text-sm text-left font-hev">{price}</p>
          <p className="text-sm text-left font-hev">{rate}</p>
        </div>
      </div>
    </div>
    // <div className="w-full grid grid-cols-3 items-center rounded-3xl p-3">
    //   <div className="flex justify-start place-content-start">
    //     <img
    //       src={src}
    //       className={"rounded-2xl object-cover w-[90%]"}
    //       alt={"cart_image"}
    //     />
    //   </div>
    //   <div className="flex flex-col items-start">
    //     <p className="text-lg font-semibold font-pop text-left">{name}</p>
    //     <div className="flex flex-row items-center w-full justify-between">
    //       <input
    //         type={"text"}
    //         className={
    //           "text-sm rounded p-1.5 block w-full shadow outline-none border-none font-pop mr-3"
    //         }
    //         placeholder={"How many peices"}
    //       />
    //     </div>
    //   </div>
    //   <div className="flex justify-end">
    //     <p className="text-lg font-semibold font-pop">{price}</p>
    //   </div>
    // </div>
  );
};

export default CartTransform;
