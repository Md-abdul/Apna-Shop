import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { ProductPage } from "../Pages/ProductPage";
import { Cartpage } from "../Pages/Cartpage";
import { Loing } from "../Pages/Loing";
import { Signup } from "../Pages/Signup";
import { PrivateRoutes } from "./PrivateRoutes";
import { SingleProduct } from "../Pages/SingleProduct";
import { HomeContainer } from "../Pages/HomeContainer";
import Carousel360 from "../Pages/Carousel360";
import { Dashboard } from "../Admin/Dashboard";
import { HomeAdmin } from "../Admin/HomeAdmin";
import { AdminProduct } from "../Admin/AdminProduct";
import { AdminProductCart } from "../Admin/AdminProductCart";
import { UserAccount } from "../Admin/UserAccount";
import { AdminEditProduct } from "../Admin/AdminEditProduct";
import { AddProduct } from "../Admin/AddProduct";
import { AllUserAcc } from "../Admin/AllUserAcc";
import { MainAdmin } from "../Admin/MainAdmin";
import { SalesAnalysis } from "../Admin/SalesAnalysis";
import { CourierPartner } from "../Admin/CourierPartner";
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Loing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/singleproduct/:_id" element={<SingleProduct />} />
        <Route path="/homecontainer" element={<HomeContainer />} />
        <Route path="/carousel360" element={<Carousel360 />} />
        <Route
          path="/cartpage"
          element={
            <PrivateRoutes>
              <Cartpage />
            </PrivateRoutes>
          }
        />

        {/* Admin side */}
        <Route path="/mainadmin" element={<MainAdmin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/homeadmin" element={<HomeAdmin />} />
        <Route path="/adminproduct" element={<AdminProduct />} />
        <Route path="/adminproductcart" element={<AdminProductCart />} />
        <Route path="/useraccount" element={<UserAccount />} />
        <Route path="/admineditproduct/:_id" element={<AdminEditProduct />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/alluseracc" element={<AllUserAcc />} />
        <Route path="/salesanalysis" element={<SalesAnalysis />} />
        <Route path="/courierpartner" element={<CourierPartner/>}/>
      </Routes>
    </>
  );
};
