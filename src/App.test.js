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
 const count = findByTestAttr(wrapper, "count").text();//Display is text, so be sure to compare against text and not in integer
 expect(count).toBe("0");
});

test("clicking on button increments counter display", () => {
  const wrapper = setup();
  //find the button
  const incrementButton = findByTestAttr(wrapper, "increment-button");
  //click the button
  incrementButton.simulate('click');
  //find the display and test if the number was incremented
  const incrementCount = findByTestAttr(wrapper, "count").text();
  expect(incrementCount).toBe("1");

  //test decrement button
  //find decrement button
  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  //click decrement button
  decrementButton.simulate('click');
  //find display and check if the count was decremented
  const decrementCount = findByTestAttr(wrapper, "count").text();
  expect(decrementCount).toBe("0");
});




// test decrement can't lower count below zero,display error message Can't Go Below Zero
test("Counter won't go below zero", () => {
  const wrapper = setup();
  //find decrement button
  const decrementButton = findByTestAttr(wrapper, "decrement-button");
 //click decrement button
 decrementButton.simulate('click');
 //find display and check if counter will decrement when count 0
  //find counter
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
 //check if message is visible when count is 0 and increment button is clicked
 const errorMessage = findByTestAttr(wrapper, "error-message");
 expect(errorMessage.toExist).to.equal(true);
});

// //test clears error on increment
// test("Clicking on increment button removes error", () => {
//  //check if error message is invisible when increment button clicked after error is triggered
// });