import "../Style/Global.css";
import { AboutData, F8, Navbar } from "../Index";
const AboutComponent = () => {
  return (
    <div className="flex flex-col items-center sm:w-ninety w-full mx-auto">
      <Navbar />
      <div
        className="relative w-full sm:h-[300px] h-[200px] bg-cover bg-center bg-no-repeat"
        id="header"
      >
        <div className="bgb w-full h-full absolute"></div>
        <div className="flex flex-col items-center absolute w-[75%] mx-auto left-[12%] top-[30%]">
          <h1 className="text-4xl text-center text-black font-hev self-center font-semibold">
            Steaky Num
          </h1>
          <p className=" font-hev text-lg self-center">
            <i className="font-semibold fa text-sm mr-3">&#xf068;</i>
            Food & Tasty
            <i className="font-semibold fa text-sm ml-3">&#xf068;</i>
          </p>
          <i
            className="text-5xl text-center font-black fa text-red-700 mt-10"
            onClick={() => {
              window.scroll(0, 700);
            }}
          >
            &#xf107;
          </i>
        </div>
      </div>
      <div className="flex flex-col items-center w-full mx-auto">
        {AboutData.map((item, index) => {
          return (
            <div className={`w-full flex ${item.flex} bg-slate-50`} key={index}>
              <div className="flex flex-col items-center w-[40%] bg-slate-50 p-4 self-stretch sm:self-center">
                <h1 className="text-2xl text-center pb-4 border-b-4 border-red-600 mb-5 font-hev font-semibold ">
                  {item.title}
                </h1>
                <p className="sm:text-sm text-xs text-center font-hev w-full mx-auto mt-5">
                  {item.text}
                </p>
              </div>
              <img
                src={item.image}
                alt="about_img"
                className="object-cover w-[60%] object-center self-stretch"
              />
            </div>
          );
        })}
      </div>
      <div className="sm:h-[300px] h-200px w-full">
        <img
          src={F8}
          className={"w-full object-cover h-[100%] object-center"}
          alt="b_image"
        />
      </div>
      <footer className="flex flex-row items-center w-full p-3 bg-black justify-between">
        <div className="flex flex-col items-start">
          <h1 className="text-xl text-center font-hev self-center font-semibold text-white">
            Steaky Num
          </h1>
          <p className=" font-hev text-sm self-center text-white">
            <i className="font-semibold fa text-sm mr-3">&#xf068;</i>
            Food & Tasty
            <i className="font-semibold fa text-sm ml-3">&#xf068;</i>
          </p>
        </div>
        <div className="flex flex-row items-center self-end">
          <div className="flex flex-row items-start w-[50%] justify-between">
            <i className="fa text-2xl text-gray-400">&#xf081;</i>
            <i className="fa text-2xl text-gray-400 mx-5">&#xf232;</i>
            <i className="fa text-2xl text-gray-400 mr-5">&#xf16d;</i>
            <i className="fa text-2xl text-gray-400">&#xf082;</i>
          </div>
        </div>
      </footer>
      <div className="w-full bg-green-400 p-5 rounded-b-2xl">
        <p className="text-base font-hev text-center self-center">
          Food Delivery Platform, &copy; Copyright,2022
        </p>
      </div>
    </div>
  );
};

export default AboutComponent;
