import {useState} from 'react';
import './App.css';


function App() {
  const [count, setCount]  = useState(0);

  const incrementHandler = ()=> {
    setCount(prevCount => prevCount + 1)
}
  const decrementHandler = () => {
    {count == 0 
      ? setCount(0)
    :null}
    
  }

  return (
    <div className="App" data-test="component-app">
     <h1 data-test="counter-display">Der Zählung ist&nbsp;
      <span data-test="count">{count}</span>
     </h1>
      <button 
        data-test="increment-button"
        onClick={incrementHandler}
        >Zuwach</button>

        <button
          data-test="decrement-button"
          onClick={decrementHandler}
        >Dekrement</button>
    </div>
  );
}

export default App;
