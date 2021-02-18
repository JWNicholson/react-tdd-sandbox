import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @returns {ShallowWrapper}
 **/ 
const setup = () => shallow(<App />);

const findByTestAttr = (wrapper,val) => wrapper.find(`[data-test='${val}']`);

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect (counterDisplay.length).toBe(1);
});

test("counter starts at 0", ()  => {
 const wrapper = setup();
 const count = findByTestAttr(wrapper, "count").text();//return is text, so be sure to compare against text and not in integer
 expect(count).toBe("0");
});

test("clicking on button increments counter display", () => {
  const wrapper = setup();
  //find the button
  const button = findByTestAttr(wrapper, "increment-button");
  //click the button
  button.simulate('click');
  //find the display and test if the number was incremented
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
});


//test decrement button
test("clicking on button decrements counter display", () => {

  //find the button

  //click the button

  //find display and check if the count was decremented

});

// test decrement can't lower count below zero,display error message Can't Go Below Zero
test("Counter won't go below zero", () => {

 //find counter

 //click decrement button

 //find display and check if counter will decrement when count 0

 //check if message is visible when count is 0 and increment button is clicked

});

//test clears error on increment
test("Clicking on increment button removes error", () => {
 //check if error message is invisible when increment button clicked after error is triggered
});