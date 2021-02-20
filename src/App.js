import React from 'react';
import './App.css';
import Jotto from './Jotto/Jotto';
import PageTitle from './PageTitle/PageTitle';
//import ClickCounter from './ClickCounter/ClickCounter';


function App() {

  return (
    <div data-test="component-app" className="App" >
      <PageTitle />

      {/* <ClickCounter /> */}

      <Jotto />

    </div>
  )
}

export default App

