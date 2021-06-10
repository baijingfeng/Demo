import createDOMElement from "./createDOMElement";
import unmountNode from "./unmountNode";

export default function mountNativeElement(virtualDOM, container, oldDOM) {
  const realDOM = createDOMElement(virtualDOM);
  // 判断 oldDOM 是否存在,如果存在,删除处理
  if (oldDOM) {
    unmountNode(oldDOM);
  }
  // 将转换后的对象放在根结点下
  container.appendChild(realDOM);

  let component = virtualDOM.component;

  if (component) {
    component.setDOM(realDOM);
  }
}
