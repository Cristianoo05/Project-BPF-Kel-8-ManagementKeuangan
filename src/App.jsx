import './App.css'
import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Loading from "./components/Loading";
import { Suspense } from "react";
// import ErrorLayout from "./layouts/ErrorLayout";
// import UserList from "./pages/UserList";
// import NavigationBar from "./components/NavigationBar";


  

const Dashboard = React.lazy(() => import("./pages/Dashboard"))
// const Customers = React.lazy(() => import("./pages/Customer"))
// const Orders = React.lazy(() => import("./pages/Order"))
// const NotFound = React.lazy(() => import("./pages/NotFound"))
// const ErrorPage = React.lazy(() => import("./pages/ErrorPage"))
const Login = React.lazy(() => import("./pages/Auth/Login"))
const Register = React.lazy(() => import("./pages/Auth/Register"))
const Forgot = React.lazy(() => import("./pages/Auth/Forgot"))
const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"))
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))
// const Products = React.lazy(() => import("./pages/Products"))
// const ProductDetail = React.lazy(() => import("./pages/ProductDetail"))
// const ProductCheckter = React.lazy(() => import("./pages/ProdukChecker"));
// const Notes = React.lazy(() => import("./pages/Notes"));
function App() {
  return (
<Suspense fallback={<Loading/>}>
        <Routes>
          <Route element={<MainLayout/>}>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/orders" element={<Orders />} /> */}
          {/* <Route path="/customers" element={<Customers />} /> */}
          {/* <Route path="/user" element={<UserList />} />  */}
          {/* <Route path="/400" element={<ErrorPage code="400" description="Bad Request. The request was invalid or cannot be served." />} /> */}
          {/* <Route path="/401" element={<ErrorPage code="401" description="Unauthorized. You are not authorized to access this page." />} /> */}
          {/* <Route path="/403" element={<ErrorPage code="403" description="Forbidden. You don't have permission to access this resource." />} /> */}
          {/* <Route path="*" element={<NotFound />} />  */}
          {/* <Route path="/Products" element={<Products/>} /> */}
			    {/* <Route path="/products/:id" element={<ProductDetail />} />  */}
          {/* <Route path="/notes" element={<Notes/>} /> */}
          </Route>

          <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot" element={<Forgot/>} />
          </Route>

          {/* <Route element={<GuestLayout/>}>
            <Route path="/guest" element={<NavigationBar />} />

          </Route> */}

          {/* <Route element={<ErrorLayout/>}>
          <Route path="/400" element={<ErrorPage code="400" description="Bad Request. The request was invalid or cannot be served." />} />
          <Route path="/401" element={<ErrorPage code="401" description="Unauthorized. You are not authorized to access this page." />} />
          <Route path="/403" element={<ErrorPage code="403" description="Forbidden. You don't have permission to access this resource." />} />
          <Route path="*" element={<NotFound />} />
          </Route>  */}
        </Routes>
    </Suspense>
  );
}

export default App
