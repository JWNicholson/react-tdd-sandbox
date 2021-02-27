import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @returns {ShallowWrapper}
 **/
//const setup = () => shallow(<App />);

const setup = (props = {}) => {
  return shallow(<App {...props} />)
}

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test.skip('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test.skip("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test.skip("counter starts at 0", () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();//Display is text, so be sure to compare against text and not in integer
  expect(count).toBe("0");
});


describe.skip('Increment', () => {

  test('renders increment button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'increment-button');
    expect(button.length).toBe(1);
  });

  test('counter increments when button clicked', () => {
    const wrapper = setup();
    //find and click the button
    const button = findByTestAttr(wrapper, 'increment-button');
    button.simulate('click');

    //check if counter incremented
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe("1");
  });
});

describe.skip('decrement button', () => {
  test('renders decrement button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'decrement-button');
    expect(button.length).toBe(1);
  });

  test('clicking on decrement button decrements counter display when count state is greater than 0', () => {
    const wrapper = setup();

    //find and click increment button so counter is greater than 0
    const incrementButton = findByTestAttr(wrapper, 'increment-button');
    incrementButton.simulate('click');

    //find and click decrement button
    const decrementButton = findByTestAttr(wrapper, 'decrement-button');
    decrementButton.simulate('click');

    //find the count display and test value
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe("0");
  });
});

describe.skip('error when counter goes below 0', () => {
  test('error does not show when not needed', () => {
    const wrapper = setup();
    const errorDiv = findByTestAttr(wrapper, 'error-message');

    //enzyme .hasClass to check for .hidden class
    const errorHasHiddenClass = errorDiv.hasClass('hidden');
    console.log(wrapper.debug());
    expect(errorHasHiddenClass).toBe(true);
  });

  describe.skip('counter is 0 and decrement is clicked', () => {
    //scope wrapper to the describe so it can be used in beforeEach and tests
    let wrapper
    beforeEach(() => {
      //default counter value of 0 works here, no need to set
      wrapper = setup();
      //find and click button
      const button = findByTestAttr(wrapper, 'decrement-button');
      button.simulate('click');
    });

    test('error shows', () => {
      //check class of error message
      const errorDiv = findByTestAttr(wrapper, 'error-message');
      const errorHasHiddenClass = errorDiv.hasClass('hidden');
      expect(errorHasHiddenClass).toBe(false);
    });

    test('counter still displays 0', () => {
      const count = findByTestAttr(wrapper, 'count').text();
      expect(count).toBe("0");
    });

    test('clicking increment clears error', () => {
      //find and click increment button
      const incrementButton = findByTestAttr(wrapper, 'increment-button');
      incrementButton.simulate('click');

      //check class of error message
      const errorDiv = findByTestAttr(wrapper, 'error-message');
      const errorHasHiddenClass = errorDiv.hasClass('hidden');
      expect(errorHasHiddenClass).toBe(true);
    });
  });
});