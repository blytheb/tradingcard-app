import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  // While Firebase is checking if user is logged in
  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  // If no user → redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If user exists → render the child component
  return children;
}
