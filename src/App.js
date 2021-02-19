import { useState } from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false)

  const incrementHandler = () => {
    setCount(prevCount => prevCount + 1)
  }
  const decrementHandler = () => {


    if (count > 0) {
      alert("fudge");
      setCount(prevCount => prevCount - 1)
    } else if (count === 0) {
      toggleError();
    }
  }

  const toggleError = () => {
    setShow(true)
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

      <div data-test="error-message">
        {
          show ?
            <h2 style={{ color: "firebrick" }}>Counter will not go below 0</h2>
            : null
        }
      </div>
    </div>
  );
}

export default App;
