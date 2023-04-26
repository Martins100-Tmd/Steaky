import { colorSchemeMediaType } from "../../Components/Type/types";
const Mode = ({ setModeState, dark, light }: colorSchemeMediaType) => {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      console.log("changed!");
      e.matches ? setModeState(dark) : setModeState(light);
    });
};

export { Mode };
