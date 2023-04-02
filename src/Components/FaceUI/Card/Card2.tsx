const CardComponent = ({
  price,
  description,
  image,
  rate,
}: {
  price: string;
  description: string;
  image: string;
  rate: string;
}) => {
  return (
    <div
      className="flex flex-col items-center rounded-2xl shadow p-4 bg-white dark:bg-gray-200 self-stretch relative
       sm:min-h-[250px] bg-opacity-40 sm:w-auto w-full"
    >
      <i className="fa text-base self-end place-self-end bg-black px-3 text-white font-hev rounded">
        {rate}
      </i>
      <div className="h-[80%] w-[70%] self-center items-end">
        <img
          src={image}
          alt="cardImage"
          className="w-full mx-auto object-cover self-center h-full"
        />
      </div>
      <div className="flex flex-row items-center w-full justify-between h-full self-end">
        <p className="font-hev font-semibold text-start text-base">
          {description}
        </p>
        <small className="text-sm text-black text-end font-hev font-semibold">
          {price}
        </small>
      </div>
    </div>
  );
};

export default CardComponent;
