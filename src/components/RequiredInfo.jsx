import React from "react";
import "../styles/RequiredInfo.css";

const RequiredInfo = ({ onClick, className = "" }) => {
  return (
    <div className={`required-info ${className}`} onClick={onClick}>
      <img src="/src/assets/svg/leave-approval-calender.svg" alt="Calendar" className="calendar-icon" />
      <span className="required-text">Leave Approval</span>
      <img src="/src/assets/svg/infoicon.svg" alt="Info" className="info-icon" />
    </div>
  );
};

export default RequiredInfo;
