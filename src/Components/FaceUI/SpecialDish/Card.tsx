import { specialDishes_item } from "../../../Type/types";
const SpecialDishCardComponent = ({
  name,
  description,
  image,
}: specialDishes_item) => {
  return (
    <>
      <div className="flex flex-col items-center gap-2 hover:shadow-xl hover:rounded-xl p-5 hover:duration-700 hover:bg-white hover:bg-opacity-40">
        <img
          src={image}
          className={"object-cover w-70 mx-auto"}
          alt="specialdishes"
        />
        <p className="font-b_serif font-semibold text-lg text-center">{name}</p>
        <p className="text-sm text-center w-ninety mx-auto font-b_serif">
          {description}
        </p>
      </div>
    </>
  );
};

export default SpecialDishCardComponent;
