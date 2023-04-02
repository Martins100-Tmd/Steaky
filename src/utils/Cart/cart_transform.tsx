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
  );
};

export default CartTransform;
