import "../../../Style/Global.css";
const NewsComponent = () => {
  return (
    <div
      className="sm:w-ninety w-nineFive rounded-3xl mx-auto sm:min-h-[300px] relative  bg-center bg-no-repeat bg-cover my-5 min-h-[200px]"
      id="FaceUINews"
    >
      <div className="absolute flex flex-col items-center sm:w-3/4 w-ninety mx-auto sm:top-[30%] top-[17%] sm:left-[12.5%] left-[5%]">
        <p className="font-hev text-3xl text-center text-white font-semibold mb-3">
          Join our members and get a discount up to 50%
        </p>
        <div className="rounded-full w-full p-2 flex flex-row items-center bg-white">
          <input
            type={"text"}
            className={
              "bg-white p-2 w-3/4 rounded-full outline-none border-none font-hev"
            }
          />
          <button
            className={
              "rounded-3xl w-1/4 text-white bg-green-500 font-semibold font-hev p-2"
            }
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
