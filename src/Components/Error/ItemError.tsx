import { emptyBag } from "../Index";

const CardPageErrorComponent = ({ mole }: { mole: string }) => {
  return (
    <div className="flex flex-col items-center justify-center sm:w-1/4 mx-auto w-[90%]">
      <img
        src={emptyBag}
        alt="empty_Bag"
        className="w-full object-cover object-center"
      />
      <p className="text-2xl font-black text-gray-800 text-center">
        No items Found!
      </p>
      <p className="text-base font-hev text-gray-500 text-center">
        Sorry mate... no items found inside your {mole}
      </p>
    </div>
  );
};

export default CardPageErrorComponent;
