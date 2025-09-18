import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginBottom: 16 }}>Dashboard</h1>
      <p>Select a workflow to continue:</p>
      <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12, maxWidth: 360 }}>
        <li>
          <Link to="/MedicalLeaveManagerApproval" style={{ textDecoration: "none" }}>
            <div style={{ padding: 12, border: "1px solid #e5e7eb", borderRadius: 8 }}>Medical Leave – Manager Approval</div>
          </Link>
        </li>
        <li>
          <Link to="/MedicalLeaveHRApproval" style={{ textDecoration: "none" }}>
            <div style={{ padding: 12, border: "1px solid #e5e7eb", borderRadius: 8 }}>Medical Leave – HR Approval</div>
          </Link>
        </li>
        <li>
          <Link to="/MaternityLeaveHRApproval" style={{ textDecoration: "none" }}>
            <div style={{ padding: 12, border: "1px solid #e5e7eb", borderRadius: 8 }}>Maternity Leave – HR Approval</div>
          </Link>
        </li>
        <li>
          <Link to="/MaternityLeaveManagerApproval" style={{ textDecoration: "none" }}>
            <div style={{ padding: 12, border: "1px solid #e5e7eb", borderRadius: 8 }}>Maternity Leave – Manager Approval</div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
