import createDOMElement from "./createDOMElement";
import unmountNode from "./unmountNode";

export default function mountNativeElement(virtualDOM, container, oldDOM) {
  const newElement = createDOMElement(virtualDOM);
  if (oldDOM) {
    container.insertBefore(newElement, oldDOM);
  } else {
    // 将转换后的对象放在根结点下
    container.appendChild(newElement);
  }

  // 判断 oldDOM 是否存在,如果存在,删除处理
  if (oldDOM) {
    unmountNode(oldDOM);
  }

  let component = virtualDOM.component;

  if (component) {
    component.setDOM(newElement);
  }
}
