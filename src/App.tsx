import {BrowserRouter, Route, Routes} from "react-router-dom";
import BaseHome from "./features/BaseHome.tsx";
import AdminBase from "./features/admin/AdminBase.tsx";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route element={<BaseHome/>} path='/'/>
              <Route element={<AdminBase/>} path='/admin'/>

              {/*<Route element={<AdminBase/>} path='/admin'/>*/}
              {/*<Route element={<AboutUs/>} path='/about'/>*/}
              {/*<Route element={<Shop/>} path='/shop'/>*/}
              {/*<Route element={<ContactUs/>} path='/contact'/>*/}
          </Routes>
      </BrowserRouter>
  )
}

export default App
