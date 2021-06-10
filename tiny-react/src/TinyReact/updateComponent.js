import diff from "./diff";

export default function updateComponent(virtualDOM, oldComponent, oldDOM, container) {
  const nextProps = virtualDOM.props;
  const prevProps = oldComponent.props;
  oldComponent.componentWillReceiveProps(nextProps);

  if (oldComponent.shouldComponentUpdate(nextProps)) {
    oldComponent.componentWillUpdate(nextProps);
    // 组件更新
    oldComponent.updateProps(nextProps);

    const nextVirtualDOM = oldComponent.render();
    nextVirtualDOM.component = oldComponent;

    diff(nextVirtualDOM, container, oldDOM);

    oldComponent.componentDidUpdate(prevProps);
  }
}
