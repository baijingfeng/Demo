export default function createElement(type, props, ...children) {
  // 处理文本节点
  // 过滤掉 null,布尔值等值
  const childElements = [...children].reduce((results, child) => {
    if (child !== false && child !== true && child !== null) {
      if (typeof child === "object") {
        results.push(child);
      } else {
        results.push(createElement("text", { textContent: child }));
      }
    }
    return results;
  }, []);
  return {
    type,
    props: Object.assign({ children: childElements }, props),
    children: childElements,
  };
}
