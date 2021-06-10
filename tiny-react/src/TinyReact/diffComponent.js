import mountElement from "./mountElement";

export default function diffComponent(virtualDOM, oldComponent, oldDOM, container) {
  if (isSameComponent(virtualDOM, oldComponent)) {
    // 同一个组件
    console.log("%c 🍻 同一个组件: ", "font-size:20px;background-color: #93C0A4;color:#fff;");
  } else {
    // 不是同一个组件
    mountElement(virtualDOM, container, oldDOM);
  }
}

// 判断是否为同一个组件
function isSameComponent(virtualDOM, oldComponent) {
  return oldComponent && virtualDOM.type === oldComponent.constructor;
}
