export function getNode(selector, context = document) {
  return context.querySelector(selector);
}

export function getNodes(selector, context = document) {
  return context.querySelectorAll(selector);
}