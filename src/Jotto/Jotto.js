import React from 'react'
import PageTitle from '../PageTitle/PageTitle';
import Congrats from './Congrats/Congrats';
import './Jotto.css'

const Jotto = () => {
  return (
    <div>
      <PageTitle title="Jotto" />

      <Congrats />
    </div>
  )
}

export default Jotto
