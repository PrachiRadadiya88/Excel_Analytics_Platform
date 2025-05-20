// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import DashboardHome from './pages/DashboardHome';
import UploadPage from './pages/UploadPage';
import HistoryPage from './pages/HistoryPage';
import AdminPage from './pages/AdminPage';

function App() {
  const isAdmin = true;

  return (
    <div>
      <Navbar isAdmin={isAdmin} />  {/* ✅ Only here */}
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/history" element={<HistoryPage />} />
        {isAdmin && <Route path="/admin" element={<AdminPage />} />}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
