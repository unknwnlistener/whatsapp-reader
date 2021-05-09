import React, { useEffect, useState } from 'react';
import './App.css';
import './styles/messenger.css';
import {Messenger} from "./components/Messenger";
import {TextFileReader} from "./components/TextFileReader";
import {parseText} from "./utilities/fileParser.js";
import {Loader} from "./components/Loader";

function worker(){
  this.addEventListener("message", (e) => {
    if (!e) {
      return;
    }

    console.log("Worker: Message received from main", e);
    postMessage("Returning message from worker");
  });
};


function App() {
	const [text, setText] = useState('');
  let loading = true;

  useEffect(() => {
    const myWorker = new Worker(worker);
    myWorker.postMessage("Testingmultithreadingstuff");
    myWorker.addEventListener('message', e => {
      console.log("Message received from worker", e.data);
    });

  }, []);

  let parsedJSON = parseText(text);
  if(parsedJSON) loading = false;

  return (
    <div className="App">
      <header className="App-header">
        <TextFileReader setText={setText}></TextFileReader>
         {<Loader visible={loading}></Loader>}
         {!loading && <Messenger jsonObj={parsedJSON}></Messenger>}
      </header>
    </div>
  );
}


export default App;
