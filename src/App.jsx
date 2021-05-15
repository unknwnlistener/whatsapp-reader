import React, { useEffect, useState } from 'react';
import './App.css';
import './styles/messenger.css';
import {Messenger} from "./components/Messenger";
import {TextFileReader} from "./components/TextFileReader";
import {Loader} from "./components/Loader";

function App() {
	const [text, setText] = useState('');
  const [loading,setLoading] = useState(true);
  const [parsedJSON, setJSON] = useState();
  
  useEffect(() => {
    const myWorker = new Worker('src/utilities/worker.js');
    setLoading(true);
    myWorker.postMessage(text);
    myWorker.onmessage = e => {
      setJSON(e.data);
    };
    setLoading(false);

  }, [text]);


  return (
    <div className="App">
      <header className="App-header">
        {text === '' ?
          <TextFileReader setText={setText}></TextFileReader> :
          (<>
            <Loader visible={loading}></Loader>
            <Messenger loading={loading} jsonObj={parsedJSON}></Messenger>
            </>)
        }
      </header>
    </div>
  );
}


export default App;
