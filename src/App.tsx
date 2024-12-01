import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { useAuthStore } from './stores/authStore';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Recon from './pages/Recon';
import BruteForce from './pages/BruteForce';
import Reports from './pages/Reports';
import Monitoring from './pages/Monitoring';
import Settings from './pages/Settings';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <React.Suspense fallback={
        <div className="h-screen w-screen flex items-center justify-center bg-[#181818]">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-[#8B5CF6]"></div>
        </div>
      }>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route index element={<Dashboard />} />
            <Route path="recon" element={<Recon />} />
            <Route path="bruteforce" element={<BruteForce />} />
            <Route path="monitoring" element={<Monitoring />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </React.Suspense>
    </Router>
  );
}

export default App;