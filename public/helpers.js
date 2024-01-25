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
 * Retrieves the HTML element with the specified id.
 *
 * @param {string} id - The id of the HTML element to be retrieved.
 * @returns {HTMLElement} - The HTML element with the specified id.
 */
const getElementById = (id) => document.getElementById(id);

/**
 * Retrieves the value of an input element with the id "input".
 *
 * @returns {string} The text entered by the user in the input
 * element with the id "input".
 */
const getTextFromInput = () => getElementById("input").value.trim();

/**
 * Sets the value of an input element with the id "input".
 *
 * @param {string} value - The value to be set for the input element.
 * @returns {void} No return value.
 */
const setTextToInput = (value) => {
	getElementById("input").value = value;
};

/**
 * A curried version of the function that adds a specified class to
 * an element's class list.
 *
 * @param {string} className - The name of the class to be added.
 * @param {HTMLElement} element - The element to which the class will be
 * added.
 * @returns {HTMLElement} The modified element with the specified class
 * added to its class list.
 */
const addClass = R.curry((className, element) => {
	element.classList.add(className);

	return element;
});

/**
 * A curried version of the function that appends a given node to a given
 * element.
 *
 * @param {Node} node - The node to be appended to the element.
 * @param {HTMLElement} element - The element to which the node will be
 * appended.
 * @returns {HTMLElement} The element with the node appended to it.
 */
const appendChild = R.curry((node, element) => {
	element.appendChild(node);

	return element;
});

/**
 * A curried version of the function that sets a specified attribute with
 * a given value
 * on a given HTML element.
 *
 * @param {string} attributeName - The name of the attribute to be set.
 * @param {string} attributeValue - The value to be set for the attribute.
 * @param {HTMLElement} element - The HTML element on which the attribute
 * will be set.
 * @returns {HTMLElement} The modified element with the specified attribute
 * set.
 */
const setAttribute = R.curry((attributeName, attributeValue, element) => {
	element.setAttribute(attributeName, attributeValue);

	return element;
});

/**
 * A curried version of the function that creates an event listener for
 * a specified event type on a given HTML element, and associates it with
 * a callback function.
 *
 * @param {string} eventType - The type of event to listen for.
 * @param {HTMLElement} element - The HTML element to attach
 * the event listener to.
 * @param {function} fn - The callback function to be executed when
 * the event is triggered.
 * @returns {function} A function that removes the event listener when
 * called.
 */
const on = R.curry((eventType, element, fn) => {
	element.addEventListener(eventType, fn);

	return () => {
		element.removeEventListener(eventType, fn);
	};
});

/**
 * A curried version of the function that clears the content of
 * the given element.
 *
 * @param {Element} element - The element whose content will be cleared.
 * @return {Element} The modified element with cleared content.
 */
const clearElement = R.curry((element) => {
	element.innerHTML = "";

	return element;
});
