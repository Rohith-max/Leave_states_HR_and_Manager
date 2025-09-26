import React, { useState } from "react";
import "../styles/LeaveApprovalForm2.css";
import Frame1000007590 from "./Frame1000007590";
import AttachmentSection from "./AttachmentSection";
import ReasonCommentSection from "./ReasonCommentSection";
import ActionButtons from "./ActionButtons";
import ViewPolicies from "./ViewPolicies";
import ApplyOrCancelIcon from "../assets/apply_or_cancel.svg";
import TransferWfButton from "../assets/transfer-wf.svg";
import TransferWorkflowBanner from "./TransferWorkflowBanner";

const LeaveApprovalForm2 = () => {
  const [requestType, setRequestType] = useState("transferTo");
  const [transferTo, setTransferTo] = useState("");
  const handleReject = () => {
    console.log("Reject clicked");
  };

  const handleApprove = () => {
    console.log("Approve clicked");
  };

  return (
    <div className="leave-approval-form">
      <div className="section-header">
        <div className="section-title-group">
          <img src={ApplyOrCancelIcon} alt="Apply/Cancel" className="section-icon" />
          <h3 className="section-title">Apply/Cancel Leave Approval</h3>
        </div>
      </div>

      <Frame1000007590 />
      <AttachmentSection defaultFileName="Medical Certificate.pdf" />
      
      <div className="acknowledgement">
        <label className="acknowledgement-label">
          <input type="checkbox" className="ack-checkbox" />
          <span className="ack-text">
            If I wish to resume work sooner/late due to any reason, I am aware that I have to notify you on the same & I hereby assure that I shall not work in any establishment during the period for which I receive Maternity Benefit from Samsung R& D Institute India Pvt. Ltd - Bangalore.
          </span>
        </label>
      </div>
      
      <ReasonCommentSection />
      <ActionButtons onReject={handleReject} onApprove={handleApprove} />

      <div className="transfer-header">
        <TransferWorkflowBanner />
      </div>

      <h4 className="section-title">Request Type</h4>
      <div className="radio-group">
        <label className="radio-option">
          <input
            type="radio"
            name="requestType"
            value="transferTo"
            checked={requestType === "transferTo"}
            onChange={(e) => setRequestType(e.target.value)}
          />
          <span className={`radio-label ${requestType === "transferTo" ? "selected" : ""}`}>Transfer To</span>
        </label>
        <label className="radio-option">
          <input
            type="radio"
            name="requestType"
            value="reviewAndSendBack"
            checked={requestType === "reviewAndSendBack"}
            onChange={(e) => setRequestType(e.target.value)}
          />
          <span className={`radio-label ${requestType === "reviewAndSendBack" ? "selected" : ""}`}>
            Review and send back to Me (No Data Modification)
          </span>
        </label>
      </div>

      <div className="transfer-to-section">
        <label className="field-label">Transfer To</label>
        <input
          type="text"
          className="transfer-input"
          value={transferTo}
          onChange={(e) => setTransferTo(e.target.value)}
          placeholder="Krishna@Samsung.com"
        />
      </div>

      <label className="field-label">Comment (Max 500 Chars)</label>
      <textarea 
        className="comment-textarea" 
        placeholder="I have an important personal matter to attend at my Home town." 
        rows={3} 
      />

      <div className="transfer-button-container">
        <img src={TransferWfButton} alt="Transfer WF" className="transfer-wf-button" />
      </div>

      <ViewPolicies />
    </div>
  );
};

export default LeaveApprovalForm2;
