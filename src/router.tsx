import { createHashRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Recon from './pages/Recon';
import BruteForce from './pages/BruteForce';
import Reports from './pages/Reports';
import Monitoring from './pages/Monitoring';
import Settings from './pages/Settings';
import { useAuthStore } from './stores/authStore';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

export const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="recon" element={<Recon />} />
        <Route path="bruteforce" element={<BruteForce />} />
        <Route path="monitoring" element={<Monitoring />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </>
  ),
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }
  }
);
