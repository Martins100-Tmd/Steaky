import { F1, F14, F19, SpecialDishCard } from "../../../Index";
const SubHeroComponent = () => {
  return (
    <>
      <div className="flex flex-col items-center text-center mt-3">
        <h1 className="font-hev text-3xl text-center font-semibold">
          Special Dishes
        </h1>
        <p className="text-sm text-center font-hev mt-1">
          Made with our premium ingredients
        </p>
      </div>
      <div className="flex sm:flex-row items-center gap-5 w-ninety mx-auto flex-col mt-5">
        <SpecialDishCard
          name="Keto Mixed Vegetables"
          image={F1}
          description={
            "Keto mixed Vegetables mashed up with beef and a touch of groundnut oil"
          }
        />
        <SpecialDishCard
          name="Keto Mixed Vegetables"
          image={F14}
          description={
            "Keto mixed Vegetables mashed up with beef and a touch of groundnut oil"
          }
        />
        <SpecialDishCard
          name="Keto Mixed Vegetables"
          image={F19}
          description={
            "Keto mixed Vegetables mashed up with beef and a touch of groundnut oil"
          }
        />
      </div>
    </>
  );
};

export default SubHeroComponent;
