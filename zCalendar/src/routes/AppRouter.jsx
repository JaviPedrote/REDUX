import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { CalendarPage } from "../calendar/pages/CalendarPage";
import { useAuthStore } from "../hooks/useAuthStore";
import { useEffect } from "react";

export const AppRouter = () => {
  // const authStatus = 'not-authenticated'
  const { checkAuthToken, status } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, [status]);

  if (status === "checking") return <h1>Espere...</h1>;
  

  return (
    <Routes>
      {status === "not-authenticated" ? (
        <>
          <Route path="/auth/*" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : (
        <>
        <Route path="/" element={<CalendarPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};
