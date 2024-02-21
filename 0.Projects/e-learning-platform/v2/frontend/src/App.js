import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import Home from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import Footer from "./components/Footer";
import PlaylistPage from "./pages/PlaylistPage";
import IT from "./pages/IT";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ChangePassword from "./pages/ChangePassword";
import ResetPassword from "./pages/ResetPassword";
import EditCourses from "./pages/EditCourses";
import IdiomsPage from "./pages/IdiomsPage";
import DashBoard from "./pages/DashBoard";
import NewCourse from "./pages/NewCourse";
import Payment from "./pages/Payment";

export default function App() {
  const user = useSelector((state) => state.user);

  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
          {!user && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
          )}
          {user && user.isAdmin && (
            <>
              <Route path="/new-course" element={<NewCourse />} />
              <Route path="/editcourse/:id" element={<EditCourses />} />
            </>
          )}
          {user && (
            <>
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/courses/:id" element={<PlaylistPage />} />
              <Route path="/found-problem" element={<IT />} />
              <Route path="/changepassword" element={<ChangePassword />} />
              <Route path="/resetpassword" element={<ResetPassword />} />
              <Route path="/handlecourses" element={<EditCourses />} />
              <Route path="/idioms" element={<IdiomsPage />} />
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/payment/:id" element={<Payment />} />
            </>
          )}
        </Routes>
      </div>
      <Footer />
    </>
  );
}
