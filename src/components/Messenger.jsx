import React, {useState} from 'react';
import { VariableSizeList as List } from 'react-window';
import '../styles/messenger.css';
import { Message } from "./Message";

export const Messenger = ({ jsonObj, loading }) => {
  const [sender, setSender] = useState('You');
  const [receiver, setReceiver] = useState('Me');
  const printMessages = () => {
    var rows = [];
    for (let date in jsonObj) {
      rows.push({ type: 'date', value: date });
      jsonObj[date]["msgs"].map((value) => {
        let classValue = value["sender"] === "Bee" ? "left" : "right";
        rows.push({ type: classValue, value: value });
        // rows.push(<div key={count++} className={classValue}><Message timestamp={value["timestamp"]} message={value["text"]}></Message></div>);
      });
    }
    return rows;
  };

  let finalRows = printMessages();

  const Row = ({ index, style }) => {
    return (<div style={style} className={finalRows[index]['type'] + ' flex-start'}>
      <div className="spacer-top"></div>
      <Message key={index} type={finalRows[index]['type']} data={finalRows[index]['value']} />
    </div>);
  };

  const getItemSize = (index) => {
    return finalRows[index]['type'] === 'date' ? 25 : 100;
  }

  const getWindowHeight = () => {
    return window.innerHeight - 60;
  }


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
            <List
              height={getWindowHeight()}
              width={"100%"}
              itemCount={finalRows.length}
              itemSize={getItemSize}>
              {/* {finalRows.map((row, i) =>
                <Message key={i} type={row['type']} data={row['value']} />
              )} */}
              {Row}
            </List>
          
    </section>
    </> 
  );
}



