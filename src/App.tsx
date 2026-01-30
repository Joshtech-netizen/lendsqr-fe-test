import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard'; 
import Users from './pages/Users/Users'; 

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;