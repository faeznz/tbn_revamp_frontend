import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/auth_context';

function ProtectedRoute({ element }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/login" />;
}

export default ProtectedRoute;
