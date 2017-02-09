const html = {
  /**
   * Get an element by selector.
   * @param {string} selector
   * @returns {HTMLElement}
   */
  getElement(selector) {
    let element = document.querySelector(selector);

    if (element === null)
      throw new Error(`Element "${selector}' not found.`);
    return element;
  }
};

export { html };
