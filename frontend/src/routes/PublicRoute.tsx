import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import type { RootState } from "../store";

export default function PublicRoute() {
  const { isAuthenticated, loading } = useAppSelector(
    (state: RootState) => state.auth
  );

  if (loading) {
    return null;
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}
