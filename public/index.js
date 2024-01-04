/**
 * A curried version of the function that creates a new DOM element with
 * specified attributes and classes, then appends it to another element.
 * Uses the `R.compose()` function from the Ramda library to apply a series of
 * transformations to the element in a functional and composable way.
 *
 * @param {string} message - The text content of the new element.
 * @param {string} data_message - The value of the `data-message` attribute for the new element.
 * @returns {HTMLElement} A new DOM element with the specified attributes and content.
 */
const message = R.curry((message, data_message) =>
	R.compose(
		appendChild(createText(message)),
		setAttribute("data-message", data_message),
		addClass("text-bg-primary"),
		addClass("p-3"),
		addClass("mb-3"),
		addClass("rounded"),
	)(createElement("div")),
);

/**
 * Generates a view based on the given state.
 *
 * @param {Array} state - The state to generate the view from.
 * @return {HTMLElement} The generated view element.
 */
const view = (state) => {
	const element = createElement("div");

	const appendFunctions = state.map((content, index) =>
		appendChild(message(content, index)),
	);

	return state.length > 0
		? R.pipe(...appendFunctions)(createElement("div"))
		: element;
};

function app(state, outputElement, dispatch) {
	R.compose(appendChild(view(state)), clearElement())(outputElement);

	const stop = dispatch((event) => {
		event.preventDefault();
		stop();

		const newText = getTextFromInput();
		const newState = newText.length > 0 ? [...state, newText] : state;

		setTextToInput("");

		app(newState, outputElement, dispatch);
	});
}

/**
 * Creates an event listener for a button click event.
 *
 * @param {string} eventType - The type of event to listen for (e.g. "click").
 * @param {Element} targetElement - The target element to attach the event listener to.
 * @returns {EventListener} - The event listener for the button click event.
 */
const buttonClick = on("click", getElementById("button"));

app(Object.freeze([]), getElementById("messages"), buttonClick);
