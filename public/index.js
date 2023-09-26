const _R = R; // eslint-disable-line

/**
 * Creates a new HTML element with the specified tag name.
 *
 * @param {string} tag - The tag name of the HTML element to be created.
 * @returns {HTMLElement} A new HTML element with the specified tag name.
 */
const createElement = (tag) => document.createElement(tag);

/**
 * Creates a text node with the specified content.
 *
 * @param {string} content - The content to be set for the text node.
 * @returns {TextNode} The text node with the specified content.
 */
const createText = (content) => document.createTextNode(content);

/**
 * A curried version of the function that adds a specified class to
 * an element's class list.
 */
const addClass = _R.curry(
  /**
   * A function that adds a specified class to an element's class list.
   *
   * @param {string} className - The name of the class to be added.
   * @param {HTMLElement} element - The element to which the class will be added.
   * @returns {HTMLElement} The modified element with the specified class added to its class list.
   */
  function (className, element) {
    element.classList.add(className);

    return element;
  }
);

/**
 * A curried version of the function that appends a given node to a given element.
 */
const appendChild = _R.curry(
  /**
   * A function that appends a given node to a given element.
   *
   * @param {Node} node - The node to be appended to the element.
   * @param {HTMLElement} element - The element to which the node will be appended.
   * @returns {HTMLElement} The element with the node appended to it.
   */
  function (node, element) {
    element.appendChild(node);

    return element;
  }
);

/**
 * A curried version of the function that sets a specified attribute
 * with a given value on a given HTML element.
 */
const setAttribute = _R.curry(
  /**
   * A function that sets a specified attribute with a given value
   * on a given HTML element.
   *
   * @param {string} attributeName - The name of the attribute to be set.
   * @param {string} attributeValue - The value to be set for the attribute.
   * @param {HTMLElement} element - The HTML element on which the attribute will be set.
   * @returns {HTMLElement} The modified element with the specified attribute set.
   */
  function (attributeName, attributeValue, element) {
    element.setAttribute(attributeName, attributeValue);

    return element;
  }
);

/**
 * A curried version of the function that creates a new DOM element with
 * specified attributes and classes, then appends it to another element.
 */
const message = _R.curry(
  /**
   * Creates a new DOM element with specified attributes and classes,
   * then appends it to another element.
   * Uses the `R.compose()` function from the Ramda library to apply a series of
   * transformations to the element in a functional and composable way.
   *
   * @param {string} message - The text content of the new element.
   * @param {string} data_message - The value of the `data-message` attribute for the new element.
   * @returns {HTMLElement} A new DOM element with the specified attributes and content.
   */
  function (message, data_message) {
    return _R.compose(
      appendChild(createText(message)),
      setAttribute("data-message", data_message),
      addClass("text-bg-primary"),
      addClass("p-4")
    )(createElement("div"));
  }
);

/**
 * Sets a specific data-message attribute for the div element.
 *
 * @param {string} data_message - The value of the `data-message` attribute for the div element.
 * @returns {HTMLElement} Return the div element with `data-message` attribute.
 */
const answer = message(
  "The Answer to the Ultimate Question of Life, The Universe, and Everything"
);

document.body.appendChild(answer("42"));
