// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from 'react-router-dom';
import "./assets/tailwind.css";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

import MainLayout from './layouts/MainLayout.jsx';
import Dashboard from './pages/admin/Dashboard.jsx';
import User from './pages/admin/User.jsx';

import GuestLayout from './layouts/GuestLayouts.jsx';
import Home from './pages/guest/home';
import About from './pages/guest/about';
import Contact from './pages/guest/contact';

// Auth Pages
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import ForgotPassword from './pages/auth/forgotPassword';

import './App.css';

function App() {
  return (
 
      <Routes>

         <Route element={<MainLayout/>}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/profile" element={<Dashboard />} />
          <Route path="/users" element={<User />} />
          <Route path="/faq" element={<Dashboard />} />
          </Route>
        

        {/* Guest Pages with layout */}
        <Route element={<GuestLayout />}>
          <Route path="/guest" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Auth Pages (tanpa layout) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        

      </Routes>
 
  );
}

export default App;
