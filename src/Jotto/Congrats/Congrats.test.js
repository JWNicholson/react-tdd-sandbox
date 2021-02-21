import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { findByTestAttr } from '../../tests/testUtils';
import Congrats from './Congrats';

Enzyme.configure({ adapter: new Adapter() });

/**
 * @function
 * @returns {JSX.Element} - Render component or null if 'success' prop is false
 */

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />)
}

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('renders no text when `success` prop is false', () => {

});

test('renders non-empty congrats message when succes prop is true', () => {

});




