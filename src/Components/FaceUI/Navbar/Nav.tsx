import { Ham1 } from "../../Index";
import { Link } from "react-router-dom";
const NavbarComponent = () => {
  return (
    <>
      <div className="sm:hidden flex flex-col items-center w-full">
        <p className="text-center font-b_serif text-2xl text-emerald-600 border-b border-slate-200 p-2 w-full">
          St<span className="text-orange-400">ea</span>ky
        </p>
      </div>
      <div className="sm:flex flex-row items-center w-ninety mx-auto justify-between hidden p-5">
        <div className="flex flex-col items-start w-2/5">
          <div className="flex flex-row items-center">
            <img
              src={Ham1}
              alt="icon_hamburger_svg"
              className="w-16 h-12 object-cover self-center"
            />
          </div>
          <p className="font-b_serif font-semibold text-lg text-black -mt-1 uppercase">
            stea<span className="text-orange-400">ky</span>
          </p>
        </div>
        <div className="flex flex-row items-center justify-between w-3/5">
          <div className="flex flex-row items-center justify-between self-start w-3/5 -mr-5">
            <Link
              to={"/"}
              className="list-none font-b_serif text-base text-center font-semibold"
            >
              Home
            </Link>
            <Link to={"/NavAbout"}>
              <span className="list-none font-b_serif text-base text-center font-semibold">
                About
              </span>
            </Link>
            <Link
              to={"/NavJob"}
              className="list-none font-b_serif text-base text-center font-semibold"
            >
              Jobs
            </Link>
          </div>
          <Link
            to={"/MENU"}
            className="rounded-2xl bg-green-400 font-b_serif text-sm px-4 py-1 font-semibold text-white shadow shadow-green-300/100"
          >
            Shop Now
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-4 w-full gap-3 sm:hidden p-4">
        <i className="text-3xl text-start text-green-500 fa font-semibold place-self-start">
          &#xf28a;
        </i>
        <Link to={"/"}>
          <div className="list-none font-b_serif text-lg text-center font-semibold place-self-center">
            Home
          </div>
        </Link>
        <Link to={"/NavJob"}>
          <div className="list-none font-b_serif text-lg text-center font-semibold place-self-center">
            Job
          </div>
        </Link>
        <Link to={"/NavAbout"}>
          <div className="list-none font-b_serif text-lg text-center font-semibold place-self-end">
            About
          </div>
        </Link>
      </div>
    </>
  );
};

export default NavbarComponent;
