import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { setTheme } from "./store/themeSlice";

function App() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.value);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-theme");
    if (stored === "light" || stored === "dark") dispatch(setTheme(stored));
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:projectId" element={<ProjectDetails />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
