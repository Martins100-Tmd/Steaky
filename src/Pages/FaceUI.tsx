import {
  Navbar,
  Hero,
  FooterComponent,
  Hero2,
  ShoffComponent,
  NewsComponent,
} from "../Index";
const FaceUIComponent = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Hero2 />
      <div className="sm:w-ninety w-nineFive mx-auto">
        <ShoffComponent />
      </div>
      <NewsComponent />
      <FooterComponent />
    </div>
  );
};

export default FaceUIComponent;
