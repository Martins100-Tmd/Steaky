import { Text } from "../../../Misc/Data/display";
import { useState, useEffect } from "react";
const DisplayComponent = () => {
  let [curr, setcurr] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      curr === 3 ? setcurr(0) : setcurr(curr + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [curr]);
  return (
    <div className="w-full h-screen rounded shadow p-6 flex justify-center bg-gray-200">
      <div className="flex flex-col items-center justify-center self-center place-self-center gap-3">
        <p
          className={`text-5xl text-center place-self-center text-black font-semibold`}
        >
          {Text[curr].Title}
        </p>
        <p className={`text-xl text-center place-self-center text-black`}>
          {Text[curr].Text}
        </p>
      </div>
    </div>
  );
};

export default DisplayComponent;
