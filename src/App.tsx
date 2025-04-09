import {BrowserRouter, Route, Routes} from "react-router-dom";
import BaseHome from "./features/BaseHome.tsx";
import AdminBase from "./features/admin/AdminBase.tsx";
import Shop from "./features/Shop.tsx";
import Loading from "./component/Other/Loading.tsx";
import { useSelector } from 'react-redux'
import { RootState } from './redux/store.tsx'
import AboutUs from "./features/AboutUs.tsx";
import ProductDetailView from "./features/ProductDetailView.tsx";
import ContactUs from "./features/admin/ContactUs.tsx";
import Login from "./features/Login.tsx";

function App() {
    const loading = useSelector((state: RootState) => state.loadingSlice)

  return (
    <div className="screen">
        {/* Loading screen state */}
    {loading && <Loading/>}
      <BrowserRouter>
          <Routes>
              <Route element={<BaseHome/>} path='/'/>
              <Route element={<AdminBase/>} path='/admin'/>
              <Route element={<Shop/>} path='/shop'/>
              <Route element={<AboutUs/>} path='/aboutus'/>
              <Route element={<AboutUs/>} path='/aboutus'/>
              <Route path="/product/details/:id" element={<ProductDetailView />} />

              <Route element={<ContactUs/>} path='/contactus'/>
              <Route element={<Login/>} path='/login'/>

              <Route element={<ProductDetailView/>} path='/p'/>

              {/*<Route element={<AdminBase/>} path='/admin'/>*/}
              {/*<Route element={<AboutUs/>} path='/about'/>*/}
              {/*<Route element={<Shop/>} path='/shop'/>*/}
              {/*<Route element={<ContactUs/>} path='/contact'/>*/}
          </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App
