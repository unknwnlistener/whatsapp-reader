import React, {useState} from 'react';
import '../styles/messenger.css';
import { Message } from "./Message";

export const Messenger = ({jsonObj}) => {
  let [mess, setMess] = useState();

  const printMessages = () => {
    let row =[];
    let count = 0;
    for(let date in jsonObj) {
      row.push(<div key={count++} className="current-date"><span>{date}</span></div>)
      jsonObj[date]["msgs"].map((value, i)=> {
        let classValue = value["sender"] === "Bee" ? "left" : "right";
        row.push(<div key={count++} className={classValue}><Message timestamp={value["timestamp"]} message={value["text"]}></Message></div>);
      });
    }
    return row
  }

  return (
    <>
    <section className="meta">
      <div className="people">
        <span className="sender">You</span>
        <span className="receiver">Me</span>
      </div>
    </section>
    <section className="chat">
      {printMessages()}
          
    </section>
    </>
  );
}



