export default function isFunction(virtualDOM) {
  if (virtualDOM && typeof virtualDOM.type === "function") {
    return true;
  } else {
    return false;
  }
}
