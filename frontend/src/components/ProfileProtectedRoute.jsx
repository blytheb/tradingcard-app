import { Navigate } from "react-router";
import { useProfile } from "../hooks/useProfile";

export default function ProfileProtectedRoute({ children }) {
  const { profile } = useProfile();

  if (!profile) {
    return <Navigate to="/profiles" replace />;
  }

  return children;
}
