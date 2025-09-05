import { Navigate } from "react-router";
import { useCurrentProfile } from "../hooks/useCurrentProfile";

export default function ProfileProtectedRoute({ children }) {
  const { profile } = useCurrentProfile();

  if (!profile) {
    return <Navigate to="/profiles" replace />;
  }

  return children;
}
