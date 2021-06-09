export default function buildClassComountComponent(virtualDOM) {
  const component = new virtualDOM.type(virtualDOM.props || {});
  const nextVirtualDOM = component.render();
  return nextVirtualDOM;
}
