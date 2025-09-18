import React from "react";
import "../styles/ActionButtons.css";

const ActionButtons = ({ onReject, onApprove }) => {
  return (
    <div className="action-buttons-container">
      <img 
        src="/src/assets/svg/reject.svg" 
        alt="Reject" 
        className="action-button reject-svg"
        onClick={onReject}
      />
      <img 
        src="/src/assets/svg/approve.svg" 
        alt="Approve" 
        className="action-button approve-svg"
        onClick={onApprove}
      />
    </div>
  );
};

export default ActionButtons;
