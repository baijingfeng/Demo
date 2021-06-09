import diff from "./diff";
// 将 virtualDOM 转换为真实 DOM 对象, 并放在页面中
export default function render(virtualDOM, container, oldDOM = container.firstChild) {
  console.log(
    "%c 🥦 virtualDOM, container, oldDOM: ",
    "font-size:20px;background-color: #FCA650;color:#fff;",
    virtualDOM,
    container,
    oldDOM
  );
  diff(virtualDOM, container, oldDOM);
}
