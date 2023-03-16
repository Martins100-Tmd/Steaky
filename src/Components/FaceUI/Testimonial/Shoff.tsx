import { F11, Card, F12, F4, F13 } from "../../Index";
const ShoffComponent = () => {
  return (
    <>
      <div className="flex flex-col items-start w-full">
        <p className="text-2xl sm:text-start text-center w-full font-b_serif font-semibold my-2">
          Favourite Menus
        </p>
        <div
          className="sm:grid sm:grid-cols-2 sm:items-start w-full justify-between md:grid md:grid-cols-4 grid grid-cols-2
        gap-4 justify-items-stretch sm:gap-10"
        >
          <Card
            price="$23.00"
            image={F12}
            rate={"4.8"}
            description={"Mushroom and Potato pizza with Fontina cheese"}
          />

          <Card
            price="$23.00"
            image={F13}
            rate={"4.7"}
            description={"Steak and cheese Sandwiches with beer-battered chips"}
          />
          <Card
            price="$23.00"
            image={F11}
            rate={"4.9"}
            description={
              "Italian-Style Shrimp & Sweet Peppers over Fregola Sarda"
            }
          />
          <Card
            price="$23.00"
            image={F4}
            rate={"4.6"}
            description={"Roasted beef and cabbage with corn & spicy pepperoni"}
          />
        </div>
      </div>
    </>
  );
};

export default ShoffComponent;
