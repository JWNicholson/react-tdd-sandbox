
/**
 * 
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper. 
 * @param {string} val - Value of data-test attribute form search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}