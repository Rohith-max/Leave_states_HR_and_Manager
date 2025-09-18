import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard.jsx";
import Workflow1Page from "./pages/Workflow1/index.jsx";
import Workflow2Page from "./pages/Workflow2/index.jsx";
import Workflow3Page from "./pages/Workflow3/index.jsx";
import Workflow4Page from "./pages/Workflow4/index.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/MedicalLeaveManagerApproval" element={<Workflow1Page />} />
      <Route path="/MedicalLeaveHRApproval" element={<Workflow2Page />} />
      <Route path="/MaternityLeaveHRApproval" element={<Workflow3Page />} />
      <Route path="/MaternityLeaveManagerApproval" element={<Workflow4Page />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
