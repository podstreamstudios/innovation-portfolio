import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { SiteNav } from "./components/layout/SiteNav";
import { Footer } from "./components/layout/Footer";
import { Overview } from "./pages/Overview";
import { StackPage } from "./pages/StackPage";
import { WorkPlan } from "./pages/WorkPlan";
import { Outputs } from "./pages/Outputs";

export function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="w-full overflow-x-hidden">
      <SiteNav />
      <Routes>
        <Route path="/" element={<Navigate to="/overview" replace />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/processes" element={<StackPage stackId="processes" />} />
        <Route path="/resources" element={<StackPage stackId="resources" />} />
        <Route path="/values" element={<StackPage stackId="values" />} />
        <Route path="/workplan" element={<WorkPlan />} />
        <Route path="/outputs" element={<Outputs />} />
      </Routes>
      <Footer />
    </div>
  );
}
