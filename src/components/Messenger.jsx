import React, {useState} from 'react';
import '../styles/messenger.css';
import { Message } from "./Message";

export const Messenger = ({jsonObj, setLoading, loading}) => {
  const [sender, setSender] = useState('You');
  const [receiver, setReceiver] = useState('Me');
  const printMessages = () => {
    setLoading(true);
    let row =[];
    let count = 0;
    for(let date in jsonObj) {
      row.push(<div key={count++} className="current-date"><span>{date}</span></div>)
      jsonObj[date]["msgs"].map((value, i)=> {
        let classValue = value["sender"] === "Bee" ? "left" : "right";
        row.push(<div key={count++} className={classValue}><Message timestamp={value["timestamp"]} message={value["text"]}></Message></div>);
      });
    }
    setLoading(false);
    return row
  }

  return (
    <>
    <section className={"meta"+(loading ? ' hidden' : '')}>
      <div className="people">
        <input onChange={setSender} defaultValue={sender} className="sender" />
        <input onChange={setReceiver} defaultValue={receiver} className="receiver" />
      </div>
    </section>
    <section className={"chat"+(loading ? ' hidden' : '')}>
      {printMessages()}
          
    </section>
    </> 
  );
}



