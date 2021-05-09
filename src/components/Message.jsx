import React from "react";
import "../styles/message.css"

export const Message = ({timestamp, message}) => {
  return (
    <div className="message">
      <div className="text">{message || "message here"}</div>
      <div className="timestamp">{timestamp || "11/12/9999"}</div>
    </div>
  );

};