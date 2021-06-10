import isFunction from "./isFunction";
import isFunctionComponent from "./isFunctionComponent";
import mountNativeElement from "./mountNativeElement";
import buildFunctionComponent from "./buildFunctionComponent";
import buildClassComponent from "./buildClassComponent";

export default function mountComponent(virtualDOM, container, oldDOM) {
  let nextVirtualDOM = null;
  let component = null;
  // 判断是类组件还是函数组件
  if (isFunctionComponent(virtualDOM)) {
    // 函数组件
    nextVirtualDOM = buildFunctionComponent(virtualDOM);
  } else {
    // 类组件
    nextVirtualDOM = buildClassComponent(virtualDOM);
    component = nextVirtualDOM.component;
  }

  if (isFunction(nextVirtualDOM)) {
    mountComponent(nextVirtualDOM, container, oldDOM);
  } else {
    mountNativeElement(nextVirtualDOM, container, oldDOM);
  }

  if (component) {
    component.componentDidMount();
    if (component.props && component.props.ref) {
      component.props.ref(component);
    }
  }
}
