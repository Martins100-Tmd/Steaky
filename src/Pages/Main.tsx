import {
  BottomBar,
  DisplayComponent,
  MainSection,
  MainSideBar,
} from "../Index";
import { useContext } from "react";
import CartContext from "../Context/cartContext";
const MainUIComponent = () => {
  let { Cart } = useContext(CartContext);
  return (
    <div className="h-screen">
      <div className="flex flex-row items-stretch w-full h-full">
        <div className={"sm:flex hidden lg:w-[6%] h-full md:w-[10%]"}>
          <MainSideBar />
        </div>
        <div className="lg:w-[67%] md:w-[90%] w-[95%] sm:px-5 sm:mx-0 h-full overflow-y-scroll">
          <MainSection />
        </div>
        <div className="lg:flex hidden w-[29%] h-full">
          <DisplayComponent />
        </div>
      </div>
      <div
        className={
          Cart.CartSideBar
            ? "sm:hidden flex w-[95%] mx-auto h-[7%] bottom-0 fixed duration-700 left-[2.5%] rounded-t"
            : "-bottom-full duration-700 sm:hidden flex"
        }
      >
        <BottomBar />
      </div>
    </div>
  );
};

export default MainUIComponent;
