import React, { useState } from "react";
import "../styles/ReasonCommentSection.css";

const ReasonCommentSection = () => {
  const [reason, setReason] = useState("I have an important personal matter to attend at my Home town.");
  const [comment, setComment] = useState("I have an important personal matter to attend at my Home town.");

  const handleReasonChange = (e) => {
    if (e.target.value.length <= 100) {
      setReason(e.target.value);
    }
  };

  const handleCommentChange = (e) => {
    if (e.target.value.length <= 500) {
      setComment(e.target.value);
    }
  };

  return (
    <>
      <label className="field-label">
        Reason (Max 100 Chars)
      </label>
      <textarea
        className="reason-textarea"
        value={reason}
        onChange={handleReasonChange}
        placeholder="Enter reason for leave"
        rows={3}
      />
      

      <label className="field-label">
        Comment (Max 500 Chars)
      </label>
      <textarea
        className="comment-textarea"
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter additional comments"
        rows={4}
      />
    </>
  );
};

export default ReasonCommentSection;
