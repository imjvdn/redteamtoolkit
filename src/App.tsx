import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { useAuthStore } from './stores/authStore';

// Lazy load pages
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const Recon = React.lazy(() => import('./pages/Recon'));
const BruteForce = React.lazy(() => import('./pages/BruteForce'));
const Reports = React.lazy(() => import('./pages/Reports'));
const Monitoring = React.lazy(() => import('./pages/Monitoring'));
const Settings = React.lazy(() => import('./pages/Settings'));

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