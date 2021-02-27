import React from 'react'
import PageTitle from '../PageTitle/PageTitle';
import Congrats from './Congrats/Congrats';
import GuessedWords from './GuessedWords/GuessedWords';
import './Jotto.css'

const Jotto = () => {
  return (
    <div>
      <PageTitle title="Jotto" />
      <Congrats success={true} />
      <GuessedWords guessedWords={[
        { guessedWord: 'train' }
      ]} />
    </div>
  );
}

export default Jotto;
