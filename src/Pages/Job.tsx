import { FooterComponent, Navbar } from "../Components/Index";
import { Eng, Man, Mar } from "../utils/Data/Job";
const JobComponent = () => {
  return (
    <div className="flex flex-col items-center sm:w-ninety mx-auto w-full">
      <Navbar />
      <h1 className="text-3xl text-center font-b_serif mb-10 p-4 rounded shadow">
        Open positions in all location
      </h1>

      <div className="flex flex-col items-center sm:w-ninety mx-auto w-nineFive">
        <h1 className="text-xl text-center font-pop uppercase my-5 border-b border-green-500 pb-2">
          Engineering Roles
        </h1>
        <div className="grid sm:grid-cols-3 grid-cols-2 w-full gap-5">
          {Eng.map((item, index) => {
            return (
              <div
                className="bg-white p-5 rounded border-l-2 border-green-600 flex flex-col items-start duration-700 hover:scale-105"
                key={index}
              >
                <p className="text-xl text-start font-pop font-semibold mb-3">
                  {item.name}
                </p>
                <div className="flex flex-row items-center">
                  <i className="fa text-lg text-gray-600 dark:text-green-500 mr-3">
                    &#xf041;
                  </i>
                  <span className="text-sm font-pop text-gray-500">
                    {item.place}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <h1 className="text-xl text-center font-pop uppercase my-5 border-b border-green-500 pb-2">
          Marketing Roles
        </h1>
        <div className="grid sm:grid-cols-3 grid-cols-2 w-full gap-5">
          {Mar.map((item, index) => {
            return (
              <div
                className="bg-white p-5 rounded border-l-2 border-green-600 flex flex-col items-start duration-700 hover:scale-105"
                key={index}
              >
                <p className="text-xl text-start font-pop font-semibold mb-3">
                  {item.name}
                </p>
                <div className="flex flex-row items-center">
                  <i className="fa text-lg text-gray-600 dark:text-green-500 mr-3">
                    &#xf041;
                  </i>
                  <span className="text-sm font-pop text-gray-500">
                    {item.place}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <h1 className="text-xl text-center font-pop uppercase my-5 border-b border-green-500 pb-2">
          Manual Roles
        </h1>
        <div className="grid sm:grid-cols-3 grid-cols-2 w-full gap-5 mb-7">
          {Man.map((item, index) => {
            return (
              <div
                className="bg-white p-5 rounded border-l-2 border-green-600 flex flex-col items-start duration-700 hover:scale-105"
                key={index}
              >
                <p className="text-xl text-start font-pop font-semibold mb-3">
                  {item.name}
                </p>
                <div className="flex flex-row items-center">
                  <i className="fa text-lg text-gray-600 dark:text-green-500 mr-3">
                    &#xf041;
                  </i>
                  <span className="text-sm font-pop text-gray-500">
                    {item.place}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default JobComponent;
