import { emptyBag } from "../../Index";

//style that applies to all element of this file
const this_style = {
  mother_div_style:
    "flex flex-col items-center justify-center sm:w-1/4 mx-auto w-[90%] mt-10",
  img_style: "w-full object-cover object-center",
  errorHead_style: "text-2xl font-black text-gray-800 text-center",
  errorMessage_style: "text-base font-hev text-gray-500 text-center",
};

//Default Component
const CardPageErrorComponent = ({ mole }: { mole: string }) => {
  return (
    <div className={this_style.mother_div_style}>
      <img src={emptyBag} alt="empty_Bag" className={this_style.img_style} />
      <p className={this_style.errorHead_style} data-info="ErrorHead">
        No items Found!
      </p>
      <p className={this_style.errorMessage_style} data-info="ErrorMessage">
        Sorry mate... no items found inside your {mole}
      </p>
    </div>
  );
};

export default CardPageErrorComponent;
