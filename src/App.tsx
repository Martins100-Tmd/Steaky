import {
  AboutComponent,
  CartComponent,
  ErrorComponent,
  FaceUIComponent,
} from "./Index";
import { Route, Routes } from "react-router-dom";
import JobComponent from "./Pages/Job";
import MainUIComponent from "./Pages/Main";
import { CartContextProvider } from "./Context/cartContext";
import { ProductCategoryContext } from "./Context/productCategory";
const App = () => {
  return (
    <ProductCategoryContext>
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
            path="/CARTDESKTOP"
            element={<CartComponent />}
            errorElement={<ErrorComponent />}
          />
        </Routes>
      </CartContextProvider>
    </ProductCategoryContext>
  );
};
export default App;
