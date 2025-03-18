export default function extractReactCompText(element) {
  let text = "";

  // 递归遍历函数
  const traverse = (children) => {
    if (children === null || children === undefined) {
      return; // 跳过空值
    }

    if (typeof children === "string") {
      text += children; // 收集文本节点
    } else if (Array.isArray(children)) {
      children.forEach(traverse); // 遍历数组
    } else if (typeof children === "object") {
      // 处理 React 元素（如 <Button> 的 children）
      traverse(children.props.children);
    }
  };

  // 开始遍历传入的元素的 children
  traverse(element.props.children);
  return text;
}
