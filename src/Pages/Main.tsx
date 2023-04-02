import {
  BottomBar,
  MainEndBar,
  MainSection,
  MainSideBar,
} from "../Components/Index";
import { useContext } from "react";
import CartContext from "../Context/Cart";
const MainUIComponent = () => {
  let { cart } = useContext(CartContext);
  return (
    <div className="h-screen">
      <div className="flex flex-row items-stretch w-full h-full">
        <div className={"sm:flex hidden w-[6%] h-full"}>
          <MainSideBar />
        </div>
        <div className="lg:w-[70%] w-[95%] sm:px-5 sm:mx-0 mx-auto h-full overflow-y-scroll">
          <MainSection />
        </div>
        <div className="lg:flex hidden lg:w-[25%] self-stretch h-full ml-5">
          <MainEndBar />
        </div>
      </div>
      <div
        className={
          cart
            ? "sm:hidden flex w-full h-[7%] bottom-0 fixed duration-700"
            : "-bottom-full duration-700"
        }
      >
        <BottomBar />
      </div>
    </div>
  );
};

export default MainUIComponent;
