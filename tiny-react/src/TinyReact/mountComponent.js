import isFunction from "./isFunction";
import isFunctionComponent from "./isFunctionComponent";
import mountNativeElement from "./mountNativeElement";
import buildFunctionComponent from "./buildFunctionComponent";
import buildClassComponent from "./buildClassComponent";

export default function mountComponent(virtualDOM, container) {
  let nextVirtualDOM = null;
  // 判断是类组件还是函数组件
  if (isFunctionComponent(virtualDOM)) {
    // 函数组件
    nextVirtualDOM = buildFunctionComponent(virtualDOM);
  } else {
    // 类组件
    nextVirtualDOM = buildClassComponent(virtualDOM);
  }
  console.log(
    "%c 🍡 nextVirtualDOM: ",
    "font-size:20px;background-color: #2EAFB0;color:#fff;",
    nextVirtualDOM
  );
  if (isFunction(nextVirtualDOM)) {
    mountComponent(nextVirtualDOM, container);
  } else {
    mountNativeElement(nextVirtualDOM, container);
  }
}
