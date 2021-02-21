import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import Houses from '../assets/deutsche_hausen.jpg';
import './Home.css'

const Home = () => {
  return (
    <hero>
      <PageTitle title={<h2>Willkommen zuhause</h2>} />
      <div>
        <img src={Houses} alt="houses" />
      </div>
    </hero>

  )
}

export default Home
