import { FoodCard } from "../../../Index";
import { useContext } from "react";
import CartContext from "../../../Context/cartContext";
import { CartObjectType } from "../../Type/types";
import ProductCategory from "../../../Context/productCategory";
import { Link } from "react-router-dom";
const MainSectionComponent = () => {
  let { Cart, setCart } = useContext(CartContext);
  let { ComputedCategory } = useContext(ProductCategory);
  return (
    <div className="flex flex-col items-center w-full sm:mt-6 mt-3">
      <div className="sm:hidden flex flex-row items-center justify-between w-full py-4 sticky top-0 z-50">
        <div
          className="flex flex-col items-start w-10"
          onClick={() => {
            Cart.CartSideBar
              ? setCart((prev: CartObjectType) => ({
                  ...prev,
                  CartSideBar: 0,
                  CartTrigger: 1,
                }))
              : setCart((prev: CartObjectType) => ({
                  ...prev,
                  CartSideBar: 1,
                  CartTrigger: 1,
                }));
          }}
        >
          <div className="w-full h-[2px] bg-black dark:bg-gray-500 font-black"></div>
          <div className="w-3/4 h-[2px] bg-black dark:bg-gray-500 my-2 font-black"></div>
          <div className="w-1/2 h-[2px] bg-black dark:bg-gray-500 font-black"></div>
        </div>
        <Link to={"/CARTDESKTOP"}>
          <div className="flex flex-row items-center">
            <p className="text-lg font-black self-end place-self-end font-hev">
              {Cart.CartArray.length}
            </p>
            <i className="flex jusify-center text-4xl fa -mt-2 dark:text-gray-500">
              &#xf07a;
            </i>
          </div>
        </Link>
      </div>
      <div className="flex flex-row items-center justify-between w-full self-start bg-gray-200 p-3 rounded">
        <i
          className="fa text-3xl self-start text-gray-500"
          onClick={() => {
            const INPUT = document.getElementById("inp") as HTMLInputElement;
            INPUT.focus();
          }}
        >
          &#xf002;
        </i>
        <input
          type={"text"}
          className={
            "p-3 font-hev text-sm block w-full mx-5 bg-gray-200 placeholder:text-xl placeholder:text-gray-500 outline-none"
          }
          placeholder={"What would you like to eat?"}
          id="inp"
        />
        <div
          className="flex flex-col items-start w-8"
          onClick={() => {
            const INPUT = document.getElementById("inp") as HTMLInputElement;
            INPUT.focus();
          }}
        >
          <div className="w-full h-[2px] bg-gray-500 font-black"></div>
          <div className="w-3/4 h-[2px] bg-gray-500 my-1.5 font-black mx-auto"></div>
          <div className="w-1/2 h-[2px] bg-gray-500 font-black mx-auto"></div>
        </div>
      </div>

      <div className="w-full sm:h-[230px] sm:mt-5 mt-3 h-[200px] sm:flex hidden relative">
        <div className={"bg-black w-full h-full rounded-lg z-50"}>
          <div className="flex flex-col items-center h-full w-full place-content-center">
            <h1 className="text-6xl text-white text-center font-bold font-hev">
              30% off
            </h1>
            <p className="text-3xl text-left text-white mt-2 font-hev">
              Fitness Meal
            </p>
          </div>
        </div>
      </div>
      <div
        className="grid sm:grid-cols-5 grid-cols-3 items-stretch w-full sm:mt-5 my-4 space-x-3 space-y-3"
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          let target = e.target as HTMLDivElement;
          if (target.dataset.name) {
            ComputedCategory(target.dataset.name);
          }
          let realTarget =
            target.id === "cat_menu" ? target : target.parentElement;
          let ParentRealTarget = realTarget?.parentElement;
          for (let i = 0; i < (ParentRealTarget?.children.length || 5); i++) {
            ParentRealTarget?.children[i].classList.remove(
              "border-b",
              "border-black"
            );
            ParentRealTarget?.children[i].children[0].classList.remove(
              "text-black"
            );
            ParentRealTarget?.children[i].children[1].classList.remove(
              "text-black"
            );
          }
          realTarget?.classList.add("border-b", "border-black");
          realTarget?.children[0].classList.add("text-black");
          realTarget?.children[1].classList.add("text-black");
        }}
      >
        <div
          className="w-auto flex flex-row items-center p-2 cursor-pointer sm:shadow-none sm:rounded-none shadow rounded justify-center
          border-b border-black"
          id="cat_menu"
          data-name="All"
          onClick={(e) => {
            let target = e.target as HTMLDivElement;
            if (target.dataset.name) {
              ComputedCategory(target.dataset.name);
            }
          }}
        >
          <i className="text-2xl material-icons mr-2 -mt-1" data-name="All">
            dashboard
          </i>
          <p
            className="text-xl font-semibold
           font-hev text-center"
            data-name="All"
          >
            All
          </p>
        </div>
        <div
          className="w-auto flex flex-row items-center p-2 cursor-pointer sm:shadow-none sm:rounded-none shadow rounded justify-center"
          id="cat_menu"
          data-name="Pizzas"
          onClick={(e) => {
            let target = e.target as HTMLDivElement;
            if (target.dataset.name) {
              ComputedCategory(target.dataset.name);
            }
          }}
        >
          <i className="text-2xl material-icons mr-2 -mt-1" data-name="Pizzas">
            room
          </i>
          <p
            className="text-xl font-semibold
           font-hev text-center"
            data-name="Pizzas"
          >
            Pizzas
          </p>
        </div>

        <div
          className="w-auto flex flex-row items-center p-2 cursor-pointer sm:shadow-none sm:rounded-none shadow rounded justify-center "
          id="cat_menu"
          data-name="Salads"
          onClick={(e) => {
            let target = e.target as HTMLDivElement;
            if (target.dataset.name) {
              ComputedCategory(target.dataset.name);
            }
          }}
        >
          <i className="text-2xl material-icons mr-2 -mt-1" data-name="Salads">
            dashboard
          </i>
          <p
            className="text-xl font-semibold
           font-hev text-center"
            data-name="Salads"
          >
            Salads
          </p>
        </div>
        <div
          className="w-auto flex flex-row items-center p-2 cursor-pointer sm:shadow-none sm:rounded-none shadow rounded justify-center"
          id="cat_menu"
          data-name="Hamburgers"
          onClick={(e) => {
            let target = e.target as HTMLDivElement;
            if (target.dataset.name) {
              ComputedCategory(target.dataset.name);
            }
          }}
        >
          <i
            className="text-2xl material-icons mr-2 -mt-1"
            data-name="Hamburgers"
          >
            star_rate
          </i>
          <p
            className="text-xl font-semibold
           font-hev text-center"
            data-name="Hamburgers"
          >
            Hamburgers
          </p>
        </div>
        <div
          className="w-auto flex flex-row items-center p-2 cursor-pointer sm:shadow-none sm:rounded-none shadow rounded justify-center "
          id="cat_menu"
          data-name="Chickens"
          onClick={(e) => {
            let target = e.target as HTMLDivElement;
            if (target.dataset.name) {
              ComputedCategory(target.dataset.name);
            }
          }}
        >
          <i
            className="text-2xl material-icons mr-2 -mt-1"
            data-name="Chickens"
          >
            star_rate
          </i>
          <p
            className="text-xl font-semibold
           font-hev text-center"
            data-name="Chickens"
          >
            Chickens
          </p>
        </div>
      </div>
      <FoodCard />
    </div>
  );
};

export default MainSectionComponent;
