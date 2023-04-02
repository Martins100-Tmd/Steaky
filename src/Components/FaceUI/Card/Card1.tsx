import { card_item } from "../../../Type/types";
import Transform from "../../../Context/Transform";
import { useContext } from "react";
import { TransformCart } from "../../Index";
const CardComponent = ({
  price,
  description,
  rate,
  image,
  Switch,
}: card_item) => {
  let { transform, settransform } = useContext(Transform);
  const rate_list = (mole: number) => {
    let rateBox = [];
    for (let i = 0; i < mole; i++) {
      rateBox.push(<i className="fa text-xl">&#xf006;</i>);
    }
    return rateBox;
  };
  return (
    <div
      className="flex flex-col items-center rounded-2xl shadow p-4 bg-white dark:bg-gray-200 self-stretch relative
       sm:min-h-[250px] bg-opacity-40 sm:w-auto w-full"
      onDoubleClick={() => {
        if (Switch) {
          settransform([
            ...transform,
            <TransformCart
              image={image}
              price={price}
              description={description}
              rate={rate}
            />,
          ]);
        }
        console.log(transform);
      }}
    >
      <i className="fa text-3xl self-end place-self-end">&#xf006;</i>
      <div className="h-[75%] w-[70%] self-center items-end">
        <img
          src={image}
          alt="cardImage"
          className="w-full mx-auto object-cover self-center h-full"
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
          {price}
        </small>
      </div>
    </div>
  );
};

export default CardComponent;
