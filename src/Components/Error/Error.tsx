import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  let Error: any = useRouteError();
  console.log(Error);

  return (
    <div
      className={`rounded p-5 shadow flex flex-col items-center sm:w-1/4 mx-auto w-ninety`}
    >
      <h1 className="text-2xl text-center font-pop">Oops!</h1>
      <p className="text-sm text-center font-pop font-semibold">
        Sorry, an unexpected error occured!
      </p>
      <p>
        <i>{Error.statusText || Error.message}</i>
      </p>
    </div>
  );
};

export default ErrorComponent;
