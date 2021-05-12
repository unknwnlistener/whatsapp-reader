import React, {useState, useEffect} from 'react';
import '../styles/messenger.css';
import { Message } from "./Message";
import {Placeholder} from "./PlaceholderComponent";
import LazyLoad from 'react-lazyload';

export const Messenger = ({jsonObj, loading}) => {
  const [sender, setSender] = useState('You');
  const [receiver, setReceiver] = useState('Me');
  const printMessages = () => {
    var rows =[];
    let count = 0;
    for(let date in jsonObj) {
      rows.push({ type: 'date', value: date });
      jsonObj[date]["msgs"].map((value)=> {
        let classValue = value["sender"] === "Bee" ? "left" : "right";
        rows.push({type: classValue, value:value});
        // rows.push(<div key={count++} className={classValue}><Message timestamp={value["timestamp"]} message={value["text"]}></Message></div>);
      });
    }
    return rows;
  }

  let finalRows = printMessages();

  return (
    <>
    <section className={"meta"+(loading ? ' hidden' : '')}>
      <div className="people">
        <input onChange={setSender} defaultValue={sender} className="sender" />
        <input onChange={setReceiver} defaultValue={receiver} className="receiver" />
        </div>
        <div className="settings hidden">
          <button className="settings__cog">Settings</button>
          <div className="settings__content">
            <fieldset className="elements">
              <div className="input-container">
                <label htmlFor="font-size" max="50">Font Size : </label>
                <input type="number" id="font-size" className="font-size" />
              </div>
              <div className="input-container">
                <label htmlFor="number">Number of messages : </label>
                <input type="number" className="number" id="number" />
              </div>
            </fieldset>
          </div>
        </div>
    </section>
      <section className={"chat" + (loading ? ' hidden' : '')}>
        {finalRows.map((row, i) => {
          return (<LazyLoad height="100%" placeholder={<Placeholder />} >
            <Message key={i} type={row['type']} data={row['value']} />
          </LazyLoad>)
        })}
          
    </section>
    </> 
  );
}



