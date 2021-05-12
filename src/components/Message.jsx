import React from "react";
import "../styles/message.css"

export const Message = ({ type, data }) => {
  console.log("Each message? ", type, data);
  return type === 'date' ? (<div className="current-date"><span>{data}</span></div>) : (
    data ? <div className={type}><div className="message">
      <div className="text">{data['text'] || "message here"}</div>
      <div className="timestamp">{data['timestamp'] || "11/12/9999"}</div>
    </div></div> : null
  );

};