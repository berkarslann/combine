import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import HomePage from "../pages/home/home";
import FeedPage from "../pages/feed/feed";
import LoginPage from "../pages/login/login";
import ProjectPage from "../pages/project/project";
import ProfilePage from "../pages/profile/profile";
import SignupPage from "../pages/signup/signup";
import AboutPage from "../pages/about/about";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../redux/user/user.action";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getCurrentUser());
      setLoading(false);
    };

    fetchData();
  }, [dispatch]);
  if (loading) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/feed"
          element={user.currentUser ? <FeedPage /> : <LoginPage />}
        />
        <Route path="/feed/:projectId" element={<ProjectPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/profile"
          element={user.currentUser ? <ProfilePage /> : <LoginPage />}
        />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
