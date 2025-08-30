import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useProfile } from "../hooks/useProfile";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const { setProfile } = useProfile();

  // While Firebase is checking if user is logged in
  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  // If no user → clear profile + redirect to login
  if (!user) {
    setProfile(null);
    return <Navigate to="/login" replace />;
  }

  // If user exists → render the child component
  return children;
}
