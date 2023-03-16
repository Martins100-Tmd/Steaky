import { card_item } from "../../../Type/types";
const CardComponent = ({ price, description, rate, image }: card_item) => {
  return (
    <div className="flex flex-col items-center rounded-2xl shadow p-4 bg-white self-stretch relative sm:min-h-[250px] bg-opacity-40 sm:w-auto w-full">
      <small className="font-pop font-semibold text-sm bg-black text-white px-5 py-1.5 rounded self-start mb-5">
        {rate}
      </small>
      <div className="h-[80%] w-[65%] self-center items-end">
        <img
          src={image}
          alt="cardImage"
          className="w-full mx-auto object-cover self-center h-full"
        />
      </div>
      <div className="flex flex-row items-end w-full justify-between h-full self-end">
        <p className="font-b_serif font-semibold text-start text-base  w-3/4">
          {description}
        </p>
        <small className="text-sm text-black text-end w-1/4 font-b_serif">
          {price}
        </small>
      </div>
    </div>
  );
};

export default CardComponent;
