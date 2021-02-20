import React, { useState } from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(0);
  const [showError, setShowError] = useState(false);


  const incrementHandler = () => {

    if (showError) { setShowError(false); }
    setCount(prevCount => prevCount + 1);

  }

  const decrementHandler = () => {

    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    } else {
      setShowError(true)
    }

  }


  return (
    <div data-test="component-app" className="App" >
      <h1 data-test="counter-display">Der Zählung is&nbsp;<span data-test="count">{count}</span></h1>

      <div data-test="error-message" className={`error ${showError ? '' : 'hidden'}`}>
        The counter cannot go below 0!!
      </div>

      <button
        data-test="increment-button"
        onClick={incrementHandler}
      >Zuwach</button>

      <button
        data-test="decrement-button"
        onClick={decrementHandler}
      >Dekrement</button>

    </div>
  )
}

export default App

