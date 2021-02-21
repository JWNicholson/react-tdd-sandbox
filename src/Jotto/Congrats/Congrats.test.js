import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { findByTestAttr, checkProps } from '../../tests/testUtils';
import Congrats from './Congrats';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = { success: false };

/**
 * Factory function to create a ShallowWrapper for the Congrats component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  //take default props, and overide with supplied props
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />)
}

test('renders without error', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('renders no text when `success` prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

test('renders non-empty congrats message when succes prop is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'component-congrats');
  expect(message.text().length).not.toBe(0);
});

test('does not throw warning with expected props', () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});

