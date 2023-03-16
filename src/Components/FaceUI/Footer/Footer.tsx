const FooterComponent = () => {
  return (
    <>
      <div className="sm:w-ninety w-nineFive mx-auto rounded-t-xl p-10 flex sm:flex-row items-start bg-black flex-col">
        <div className="flex flex-col items-start w-full h-full mb-7">
          <div className="flex flex-row items-center gap-2 self-start">
            <i className="text-2xl text-start text-green-500 fa mr-2">
              &#xf28a;
            </i>
            <span className="font-b_serif text-2xl text-white">Steaky Num</span>
          </div>
          <p className="text-base font-b_serif text-start self-center text-white my-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quos
            porro error harum nam tempore voluptatem itaque deleniti, similique
            molestiae.
          </p>
          <div className="flex flex-row items-start w-[50%] justify-between">
            <i className="fa text-2xl text-gray-400">&#xf081;</i>
            <i className="fa text-2xl text-gray-400">&#xf232;</i>
            <i className="fa text-2xl text-gray-400">&#xf16d;</i>
            <i className="fa text-2xl text-gray-400">&#xf082;</i>
          </div>
        </div>
        <div className="flex flex-col sm:items-center items-start gap-5  w-full">
          <h1 className="text-2xl font-b_serif font-semibold mb-3 text-white uppercase ">
            RESOURCES
          </h1>
          <ul className="flex flex-col items-start gap-1 text-white">
            <li className="font-pop text-base font-semibold text-left">
              Application
            </li>
            <li className="font-pop text-base font-semibold text-left">
              Delivery
            </li>
            <li className="font-pop text-base font-semibold text-left">
              System
            </li>
            <li className="font-pop text-base font-semibold text-left">FAQs</li>
          </ul>
        </div>
        <div className="flex flex-col sm:items-center items-start gap-5 sm:my-0 my-7">
          <h1 className="text-2xl font-b_serif font-semibold mb-3 text-white">
            Company
          </h1>
          <ul className="flex flex-col items-start gap-1 text-white">
            <li className="font-pop text-base font-semibold">About us</li>
            <li className="font-pop text-base font-semibold">Blogs</li>
            <li className="font-pop text-base font-semibold">Contacts</li>
            <li className="font-pop text-base font-semibold">Services</li>
          </ul>
        </div>
        <div className="flex flex-col sm:items-center items-start gap-5 w-full">
          <h1 className="text-2xl font-b_serif font-semibold mb-3 text-white uppercase">
            Social
          </h1>
          <ul className="flex flex-col items-start gap-1 text-white">
            <li className="font-pop text-base font-semibold text-left">
              Twitter
            </li>
            <li className="font-pop text-base font-semibold text-left">
              Facebook
            </li>
            <li className="font-pop text-base font-semibold text-left">
              WhatsApp
            </li>
            <li className="font-pop text-base font-semibold text-left">
              Instagram
            </li>
          </ul>
        </div>
      </div>
      <footer className="p-3 sm:w-ninety w-nineFive mx-auto rounded-b-xl bg-green-400 text-center">
        <p className="text-base font-b_serif text-center">
          Food Delivery Platform, &copy; Copyright,2022
        </p>
      </footer>
    </>
  );
};

export default FooterComponent;
