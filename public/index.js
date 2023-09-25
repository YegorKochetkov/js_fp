const _R = R; // eslint-disable-line

const createElement = (tag) => document.createElement(tag);
const createText = (content) => document.createTextNode(content);

const addClass = _R.curry(function (className, element) {
  element.classList.add(className);

  return element;
});

const appendChild = _R.curry(function (node, element) {
  element.appendChild(node);

  return element;
});

const setAttribute = _R.curry(function (
  attributeName,
  attributeValue,
  element
) {
  element.setAttribute(attributeName, attributeValue);

  return element;
});

const message = _R.curry(function (message, data_message) {
  return _R.compose(
    appendChild(createText(message)),
    setAttribute("data-message", data_message),
    addClass("text-bg-primary"),
    addClass("p-4")
  )(createElement("div"));
});

const answer = message(
  "The Answer to the Ultimate Question of Life, The Universe, and Everything"
);

document.body.appendChild(answer("42"));
