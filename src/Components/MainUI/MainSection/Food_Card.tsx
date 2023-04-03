import MiscContext from "../../../Context/Misc";
import { useContext } from "react";
import CardPageErrorComponent from "../../Error/ItemError";
const FoodCardComponent = () => {
  let { misc } = useContext(MiscContext);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:gap-5 gap-3 grid-cols-2 items-center w-full scroll-m-2">
      {misc.favouriteCard(misc.currentCategory) ? (
        misc.favouriteCard(misc.currentCategory).map((item, index) => {
          return <div key={index}>{item}</div>;
        })
      ) : (
        <CardPageErrorComponent mole={misc.currentCategory} />
      )}
    </div>
  );
};

export default FoodCardComponent;
