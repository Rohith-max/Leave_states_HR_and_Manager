import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard.jsx";
import Workflow1Page from "../pages/Workflow1/index.jsx";
import Workflow2Page from "../pages/Workflow2/index.jsx";
import Workflow3Page from "../pages/Workflow3/index.jsx";
import Workflow4Page from "../pages/Workflow4/index.jsx";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/workflow/1" element={<Workflow1Page />} />
      <Route path="/workflow/2" element={<Workflow2Page />} />
      <Route path="/workflow/3" element={<Workflow3Page />} />
      <Route path="/workflow/4" element={<Workflow4Page />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
