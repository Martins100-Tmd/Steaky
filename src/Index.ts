//Assets Images
import Ham1 from "./Assets/SVG/Ham1.png";
import Hero1 from "./Assets/Hero1.png";
import F1 from "./Assets/F1.png";
import F14 from "./Assets/F14.png";
import F19 from "./Assets/F19.png";
import HeroSect1 from "./Assets/SVG/HeroSect1.png";
import HeroSect2 from "./Assets/SVG/HeroSect2.png";
import Testimonial1 from "./Assets/Testimonial1.jpg";
import Testimonial2 from "./Assets/Testimonial2.jpg";
import Testimonial3 from "./Assets/Testimonial3.jpg";
import F16 from "./Assets/F16.png";
import F12 from "./Assets/F12.png";
import F4 from "./Assets/F4.png";
import F11 from "./Assets/F11.png";
import F13 from "./Assets/F13.png";
import F8 from "./Assets/F8.jpg";
import F18 from "./Assets/F18.jpg";
import F20 from "./Assets/F20.png";
import F21 from "./Assets/F21.jpg";
import F7 from "./Assets/F7.png";
import emptyBag from "./Assets/emptyBag.png";
import ham1 from "./Assets/ham1.jpg";
import ham2 from "./Assets/ham2.jpg";
import ham3 from "./Assets/ham3.png";
import ham4 from "./Assets/ham4.jpg";
import ham5 from "./Assets/ham5.jpg";
export {
  ham1,
  ham2,
  ham3,
  ham4,
  ham5,
  F7,
  F21,
  emptyBag,
  F8,
  F18,
  F20,
  Ham1,
  F13,
  F12,
  F11,
  F4,
  F16,
  Hero1,
  F1,
  F14,
  F19,
  HeroSect1,
  HeroSect2,
  Testimonial1,
  Testimonial3,
  Testimonial2,
};
export let Images = {
  F21,
  F8,
  F18,
  F20,
  Ham1,
  F13,
  F12,
  F11,
  F4,
  F16,
  Hero1,
  F1,
  F14,
  F19,
  HeroSect1,
  HeroSect2,
  Testimonial1,
  Testimonial3,
  Testimonial2,
};
//SpecialDishCard Component
export { default as SpecialDishCard } from "./Components/FaceUI/SpecialDish/Card";

//Testimonial Component
export { default as ShoffComponent } from "./Components/FaceUI/Prototype/CardItems";

//================== Datas ==========================
import AboutData from "./Misc/Data/About"; //========
import { Eng, Man, Mar } from "./Misc/Data/Job"; //==
import CardDB from "./Misc/CardDB/Item"; //==========
export { AboutData, Eng, Man, Mar, CardDB }; //======
//===================================================

//================================== FaceUI ======================================
//Newsletter Component                                                      ======
export { default as NewsComponent } from "./Components/FaceUI/Newletter/New"; //==
//Footer Component                                                          ======
export { default as FooterComponent } from "./Components/FaceUI/Footer/Footer"; //
//FaceUI Component                                                          ======
export { default as FaceUIComponent } from "./Pages/FaceUI"; //===================
//Navbar Component                                                          ======
export { default as AboutComponent } from "./Pages/About"; //=====================
export { default as Navbar } from "./Components/FaceUI/Navbar/Nav"; //============
//Card sections Component                                            =============
export { default as Card } from "./Components/FaceUI/Card/Card1"; //==============
export { default as CardII } from "./Components/FaceUI/Card/Card2"; //============
//Hero section Component                                              ============
export { default as Hero } from "./Components/FaceUI/Hero/Hero"; //===============
export { default as Hero2 } from "./Components/FaceUI/Hero/Hero2"; //=============
//================================================================================

//=================================== Error ======================================
//Error Component                                                           ======
export { default as ErrorComponent } from "./Components/Error/Error"; //==========
export { default as ItemErrorComponent } from "./Components/Error/ItemError"; //==
//================================================================================

//================================ MainUI ===========================================
//RightBar Component                                                       ==========
export { default as MainSideBar } from "./Components/MainUI/SideBar/sideBar"; //=====
export { default as BottomBar } from "./Components/MainUI/SideBar/BsideBar"; //======
//MainSection Component                                                    ==========
export { default as MainSection } from "./Components/MainUI/MainSection/MainSect"; //
export { default as FoodCard } from "./Components/MainUI/MainSection/Food_Card"; //==
//LeftBar Component                                                        ==========
export { default as MainEndBar } from "./Components/MainUI/EndBar/sideBar"; //=======
export { default as DesktopEndBar } from "./Components/MainUI/EndBar/DesktopBar"; //=
//utils/func                                                                 ========
export { default as CardToCart } from "./Components/MainUI/Cart/CardToCartDesktop"; //======
//===================================================================================
