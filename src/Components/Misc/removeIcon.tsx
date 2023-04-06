import React from "react";
const RemoveIcon = ({
  bg,
  H,
  W,
  click,
}: {
  bg: string;
  H: string;
  W: string;
  click: React.MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div
      className="relative place-self-center flex justify-center"
      onClick={click}
    >
      <div className={`absolute z-40 h-[${H}] w-${W} bg-${bg} rotate-45`}>
        .
      </div>
      <div className={`absolute z-50 h-[${H}] w-[${W}] bg-${bg} -rotate-45`}>
        .
      </div>
    </div>
  );
};

export default RemoveIcon;
