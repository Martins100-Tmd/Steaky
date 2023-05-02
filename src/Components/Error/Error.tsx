import { useRouteError } from "react-router-dom";

//global styling for this file
const this_style = {
  mother_div: `rounded p-5 shadow flex flex-col items-center sm:w-1/4 mx-auto w-ninety`,
  h1: "text-2xl text-center font-hev",
  p: "text-sm text-center font-hev font-semibold",
};

//Default Component
const ErrorComponent = () => {
  let Error: any = useRouteError();
  return (
    <div className={this_style.mother_div}>
      <h1 className={this_style.h1}>Oops!</h1>
      <p className={this_style.p}>Sorry, an unexpected error occured!</p>
      <p>
        <i>{Error.statusText || Error.message}</i>
      </p>
    </div>
  );
};

export default ErrorComponent;
