import {useState} from 'react';
import './App.css';


function App() {
  const [count, setCount]  = useState(0);
  return (
    <div className="App" data-test="component-app">
     <h1 data-test="counter-display">Der Zählung ist&nbsp;
      <span data-test="count">{count}</span>
     </h1>
      <button 
        data-test="increment-button"
        onClick={() => setCount(count + 1)}
        >Zuwachs</button>
    </div>
  );
}

export default App;
