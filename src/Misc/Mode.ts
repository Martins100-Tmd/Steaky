type Clsm = {
  cardBG: string;
  cardBTN: string;
};
export const ColorScheme = () => {
  let mode: Clsm;
  window
    .matchMedia("prefers-color-scheme: dark")
    .addEventListener("change", (e) => {
      mode = e.matches
        ? {
            cardBG: "bg-gray-200",
            cardBTN: "bg-gray-100",
          }
        : {
            cardBG: "bg-white",
            cardBTN: "bg-black",
          };
      return mode;
    });
};
