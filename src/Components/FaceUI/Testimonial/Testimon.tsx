import { Testimonial1 } from "../../Index";

import { User_Testimony } from "../../Index";
import { useState } from "react";
const TestimonyComponent = () => {
  let [count, setcount] = useState<number>(0);
  return (
    <div className="flex flex-col items-center gap-4 sm:w-1/3  p-3 sm:mt-5 mt-5">
      {/* <div className="w-full rounded shadow bg-green-200 opacity-25 p-3">
        <p className="text-xl sm:text-left text-center font-pop font-semibold">
          Customers
        </p>
      </div> */}
      <div className="flex flex-col items-start w-full h-3/4">
        <div className="flex flex-row items-center w-full h-full">
          <img
            src={User_Testimony[count].image}
            alt={"customer_reviews"}
            className="rounded-full w-16 h-16 border-2 border-teal-500 object-cover mr-2"
          />
          <div className="flex flex-col items-start">
            <p className="font-pop font-semibold text-start text-lg">
              {User_Testimony[count].name}
            </p>
            <small className="text-start text-gray-300 font-pop">
              {User_Testimony[count].job}
            </small>
          </div>
        </div>
        <div className="w-full mt-5 self-start h-full">
          <p className="font-pop text-base text-left">
            {User_Testimony[count].said}
          </p>
        </div>
        <div className="flex flex-row items-start sm:w-1/4 w-1/2 justify-between mt-3">
          <i
            className="text-2xl fa text-green-600 cursor-pointer"
            onClick={() => (count >= 1 ? setcount(count - 1) : setcount(2))}
          >
            &#xf0a8;
          </i>
          <i
            className="text-2xl fa text-green-600 cursor-pointer"
            onClick={() => (count <= 1 ? setcount(count + 1) : setcount(0))}
          >
            &#xf0a9;
          </i>
        </div>
      </div>
    </div>
  );
};

export default TestimonyComponent;
