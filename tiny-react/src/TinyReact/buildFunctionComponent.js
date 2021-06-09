export default function buildFunctionComponent(virtualDOM) {
  return virtualDOM.type(virtualDOM.props || {});
}
