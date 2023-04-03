import {
  AboutComponent,
  ErrorComponent,
  FaceUIComponent,
  MainEndBar,
} from "./Components/Index";
import { Route, Routes } from "react-router-dom";
import JobComponent from "./Pages/Job";
import MainUIComponent from "./Pages/Main";
import { CartContextProvider } from "./Context/Cart";
import { TransformProvider } from "./Context/Transform";
import { MiscContextProvider } from "./Context/Misc";
const App = () => {
  return (
    <MiscContextProvider>
      <TransformProvider>
        <CartContextProvider>
          <Routes>
            <Route
              path="/"
              element={<FaceUIComponent />}
              errorElement={<ErrorComponent />}
            />
            <Route
              path="/NavAbout"
              element={<AboutComponent />}
              errorElement={<ErrorComponent />}
            />
            <Route
              path="/NavJob"
              element={<JobComponent />}
              errorElement={<ErrorComponent />}
            />
            <Route
              path="/MENU"
              element={<MainUIComponent />}
              errorElement={<ErrorComponent />}
            />
            <Route
              path="/CART"
              element={<MainEndBar />}
              errorElement={<ErrorComponent />}
            />
          </Routes>
        </CartContextProvider>
      </TransformProvider>
    </MiscContextProvider>
  );
};
export default App;
