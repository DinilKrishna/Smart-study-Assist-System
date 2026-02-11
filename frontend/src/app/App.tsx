import { useEffect } from "react";
import AppRouter from "./AppRouter";
import { useAppDispatch } from "../store/hooks";
import { fetchMe } from "../store/auth/authThunks";

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      dispatch(fetchMe());
    }
  }, [dispatch]);

  return <AppRouter />;
}
