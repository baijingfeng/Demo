import mountElement from "./mountElement";
import createDOMElement from "./createDOMElement";

export default function mountNativeElement(virtualDOM, container) {
  const realDOM = createDOMElement(virtualDOM);
  // 将转换后的对象放在根结点下
  container.appendChild(realDOM);

  let component = virtualDOM.component;

  if (component) {
    component.setDOM(realDOM);
  }
}
