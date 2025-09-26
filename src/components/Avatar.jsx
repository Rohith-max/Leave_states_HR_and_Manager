import React from "react";

const Avatar = ({ initials = "--", isOnline = false, onClick }) => {
  return (
    <div
      className="avatar"
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 48,
        height: 48,
        borderRadius: "50%",
        backgroundColor: "#e0e7ff",
        color: "#1e3a8a",
        fontWeight: 600,
        position: "relative",
        cursor: onClick ? "pointer" : "default",
      }}
      aria-label={`User avatar ${initials}`}
    >
      {initials}
      <span
        style={{
          position: "absolute",
          bottom: 2,
          right: 2,
          width: 10,
          height: 10,
          borderRadius: "50%",
          backgroundColor: isOnline ? "#22c55e" : "#9ca3af",
          border: "2px solid white",
        }}
      />
    </div>
  );
};

export default Avatar;
