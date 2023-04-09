import { BottomBar, MainSection, MainSideBar } from "../Index";
import { useContext } from "react";
import CartContext from "../Context/cartContext";
const MainUIComponent = () => {
  let { Cart } = useContext(CartContext);
  return (
    <div className="h-screen">
      <div className="flex flex-row items-stretch w-full h-full">
        <div className={"sm:flex hidden w-[6%] h-full"}>
          <MainSideBar />
        </div>
        <div className="lg:w-[67%] w-[95%] sm:px-5 sm:mx-0 mx-auto h-full overflow-y-scroll">
          <MainSection />
        </div>
      </div>
      <div
        className={
          Cart.CartSideBar
            ? "sm:hidden flex w-full h-[7%] bottom-0 fixed duration-700"
            : "-bottom-full duration-700 sm:hidden flex"
        }
      >
        <BottomBar />
      </div>
    </div>
  );
};

export default MainUIComponent;
