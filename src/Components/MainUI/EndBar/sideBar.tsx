import CartContext from "../../../Context/cartContext";
import { useContext, useState } from "react";
import { CardToCart, ItemErrorComponent } from "../../../Index";
import { Link } from "react-router-dom";
const DesktopEndBarComponent = () => {
  let { Cart, setCart, ComputedFees } = useContext(CartContext);
  let [sus, setsus] = useState(0);
  return (
    <>
      <div className="w-full bg-black">
        <nav className="flex flex-row items-center justify-between w-[95%] mx-auto p-3">
          <Link to={"/MENU"}>
            <i className="text-2xl text-white place-self-start fa">&#xf177;</i>
          </Link>
          <p className="text-2xl text-white font-hev text-center place-self-center">
            Shopping Cart
          </p>
          <i className="text-2xl text-white place-self-start fa">&#xf290;</i>
        </nav>
      </div>
      <div
        className={
          "flex sm:flex-row flex-col items-stretch w-full h-screen justify-between"
        }
      >
        <div className="flex flex-col items-center w-[97%] mx-auto sm:p-20 h-full p-5 sm:shadow-none shadow sm:rounded-none rounded my-5">
          <div className="flex flex-row justify-between w-full items-center">
            <p className="text-2xl text-left font-hev font-black">
              Shopping Cart
            </p>
            <div className={"flex flex-row items-center place-self-end"}>
              <p className="font-hev text-lg font-semibold">
                {Cart.CartArray.length}
              </p>
              <p className="font-hev text-lg font-semibold">items</p>
            </div>
          </div>
          <div className="w-full bg-gray-300 h-[1px] my-3"></div>
          <div className={"grid grid-cols-1 w-full gap-2"}>
            <div className="flex flex-row items-center w-full justify-between gap-1">
              <p className="text-lg font-medium font-hev text-left w-[40%]">
                Product Details
              </p>
              <p className="text-lg font-medium font-hev sm:text-left text-center w-[30%]">
                Quantity
              </p>
              <p className="text-lg font-medium font-hev  text-center w-[15%]">
                Price
              </p>
              <p className="text-lg font-medium font-hev text-center w-[15%] place-self-end">
                Total
              </p>
            </div>
            <div className="flex flex-col items-center w-full justify-between h-full">
              {Cart.CartArray.length ? (
                <div className="w-full">
                  {Cart.CartArray.map((item, index) => {
                    return (
                      <div className="w-full" key={index}>
                        <CardToCart
                          image={item.image}
                          name={item.name}
                          category={item.category}
                          price={item.price}
                          rate={item.rate}
                          quantity={item.quantity}
                          id={item.id}
                        />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <ItemErrorComponent mole={"Cart"} />
              )}
            </div>
          </div>
        </div>
        <div className="sm:w-[40%] h-screen sm:bg-gray-200 flex flex-col items-center w-[97%] mx-auto sm:p-20 p-5 sm:shadow-none shadow sm:rounded-none rounded">
          <div className="flex justify-start w-fullsm: h-[5%]">
            <p className="text-2xl text-left font-hev font-semibold">
              Order Summary
            </p>
          </div>
          <div className="w-full bg-gray-300 h-[1px] my-3"></div>
          <div className="flex flex-row items-center w-full justify-between mt-3 sm:h-[10%] sm:mb-0 mb-7">
            <p className="text-left font-hev text-xl font-semibold place-self-start">
              <span className="font-medium mr-1">
                {Object.keys(Cart.CartDuplicate).length}
              </span>
              Items
            </p>
            <p className="font-hev text-lg font-medium text-right place-self-start">
              ${ComputedFees().subtotal}
            </p>
          </div>
          <div className="flex flex-col items-center w-full sm:h-[20%] sm:mb-0 mb-7">
            <p className="text-xl font-hev uppercase text-left place-self-start font-semibold mb-7">
              Shipping
            </p>
            <select
              className="block w-full rounded-sm p-3 font-hev outline-none sm:shadow-none shadow"
              id="select"
            >
              <option
                value="Standard Delivery - $"
                className="font-hev w-full block"
              >
                {"Standard Delivery - $" + (ComputedFees().deliveryFee + 1)}
              </option>
              <option value="Normal Delivery - $">
                {"Normal Delivery - $" + ComputedFees().deliveryFee}
              </option>
            </select>
          </div>
          <div className="flex flex-col items-center w-full sm:h-[20%] sm:mb-0 mb-7">
            <p className="text-xl font-hev uppercase text-left place-self-start font-semibold mb-7">
              Promo Code
            </p>
            <small className="text-sm text-left font-hev my-2 place-self-start">
              Use Promo Code to get a $3 discount on the total
            </small>
            <input
              type="text"
              id="promo"
              className="w-full block p-3 font-hev font-medium rounded-sm placeholder:text-gray-500 outline-none sm:shadow-none shadow"
              placeholder={"Enter your code....."}
              onChange={(e) => {
                const select = document.getElementById(
                  "select"
                ) as HTMLSelectElement;
                if (e.target.value === "0101") {
                  e.target.classList.add("bg-green-100");
                  e.target.disabled = true;
                  e.target.value = "****";
                  setsus(1);
                } else if (
                  e.target.value.split("").length === 4 &&
                  e.target.value !== "0101"
                ) {
                  e.target.classList.add("bg-red-100");
                  setsus(0);
                }
                select.disabled = true;
              }}
            />
          </div>
          <div className="w-full sm:h-[20%]">
            <button
              className="w-[140px] h-[40px] bg-rose-500 font-hev font-semibold text-white"
              onClick={() => {
                sus ? setsus(1) : setsus(0);
              }}
            >
              Apply
            </button>
          </div>
          <div className="w-full bg-gray-300 h-[1px] sm:my-10 my-4"></div>
          <div className="flex flex-row items-center w-full justify-between mt-3">
            <p className="text-left font-hev text-xl font-semibold place-self-start">
              Total
            </p>
            <p className="font-hev text-lg font-medium text-right place-self-start">
              ${ComputedFees().total}
            </p>
          </div>
          {sus ? (
            <div className="flex flex-row items-center w-full justify-between mt-3">
              <p className="text-left font-hev text-xl font-semibold place-self-start">
                Discount
              </p>
              <p className="font-hev text-lg font-medium text-right place-self-start">
                $3
              </p>
            </div>
          ) : (
            <div></div>
          )}
          <button
            className={`w-full sm:block rounded-sm p-4 font-hev text-center font-semibold text-white bg-black mt-5 hidden
        `}
          >
            $
            {sus
              ? ComputedFees().total - 3 + " - Checkout"
              : ComputedFees().total + " - Checkout"}
          </button>
        </div>
        <button
          className={`w-[97%] mx-auto block rounded-sm p-4 font-hev text-center font-semibold text-white bg-black mt-5 sm:hidden
        `}
        >
          $
          {sus
            ? ComputedFees().total - 3 + " - Checkout"
            : ComputedFees().total + " - Checkout"}
        </button>
      </div>
    </>
  );
};

export default DesktopEndBarComponent;
