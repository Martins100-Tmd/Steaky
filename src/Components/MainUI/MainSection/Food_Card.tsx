import ProductCategory from "../../../Context/productCategory";
import { useContext } from "react";
import CardPageErrorComponent from "../../Error/ItemError";
import { Card } from "../../../Index";
import { ProductContextType } from "../../Type/types";

const FoodCardComponent = () => {
  let { state } = useContext<ProductContextType>(ProductCategory);
  let mole = state[0].category ? state[0].category : "Product";
  return (
    <div className="grid md:grid-cols-3 sm:gap-5 gap-3 grid-cols-2 items-center w-full scroll-m-2">
      {state ? (
        state.map((item, index) => {
          return (
            <div key={index}>
              <Card
                price={item.price}
                rate={item.rate}
                quantity={item.quantity}
                image={item.image}
                id={item.id}
                category={item.category}
                name={item.name}
              />
            </div>
          );
        })
      ) : (
        <CardPageErrorComponent mole={mole} />
      )}
    </div>
  );
};

export default FoodCardComponent;
