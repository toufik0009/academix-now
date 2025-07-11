// src/AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from '../pages/Homepage';
import Courses from '../pages/Courses';
import CourseDetails from '../pages/CoursesDetails';

import LoginPage from '../auth/Login';
import RegisterPage from '../auth/Register';

import Navbar from "../components/header/Navbar";
import Footer from "../components/header/Footer";

import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import About from '../pages/About';
import Contact from '../pages/Contact';

function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default function AppRouter() {
  return (
    <Router>
      <Routes>

        {/* Public routes: redirect to / if already logged in */}
        <Route path="/login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } />
        <Route path="/signup" element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        } />

        {/* Protected routes with layout */}
        <Route path="/" element={
          <ProtectedRoute>
            <DefaultLayout>
              <Homepage />
            </DefaultLayout>
          </ProtectedRoute>
        } />
        <Route path="/courses" element={
          <ProtectedRoute>
            <DefaultLayout>
              <Courses />
            </DefaultLayout>
          </ProtectedRoute>
        } />
        <Route path="/courses/:id" element={
          <ProtectedRoute>
            <DefaultLayout>
              <CourseDetails />
            </DefaultLayout>
          </ProtectedRoute>
        } /> 
        <Route path="/about" element={
          <ProtectedRoute>
            <DefaultLayout>
              <About />
            </DefaultLayout>
          </ProtectedRoute>
        } /> 
        <Route path="/contact" element={
          <ProtectedRoute>
            <DefaultLayout>
              <Contact />
            </DefaultLayout>
          </ProtectedRoute>
        } />

      </Routes>
    </Router>
  );
}
