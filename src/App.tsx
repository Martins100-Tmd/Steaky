import {
  AboutComponent,
  ErrorComponent,
  FaceUIComponent,
} from "./Components/Index";
import { Route, Routes } from "react-router-dom";
import JobComponent from "./Pages/Job";
const App = () => {
  return (
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
    </Routes>
  );
};
export default App;
