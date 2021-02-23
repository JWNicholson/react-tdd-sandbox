import { EnzymeAdapter } from 'enzyme';
import React from 'react';
import { shallow } from 'enzyme';
import { findTestByAttr, checkProps } from '../../tests/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
  guessedWords: [{ 'train', letterMatchCount: 3 }]
};

/**
 * Factory function to create a ShallowWrapper for the Congrats component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />)
};

test('does not throw warning with expected props', () => {
  checkProps(GuessedWords, defaultProps);
})