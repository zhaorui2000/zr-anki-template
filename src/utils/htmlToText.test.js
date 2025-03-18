import htmlToText from "./htmlToText";

describe("htmlToText 函数测试", () => {
  test("处理普通文本节点", () => {
    const html = "<p>这是一段普通文本</p>";
    const result = htmlToText(html);
    expect(result).toEqual("这是一段普通文本");
  });

  test("处理元素节点及其子节点", () => {
    const html = "<div><p>段落 1</p><p>段落 2</p></div>";
    const result = htmlToText(html);
    expect(result).toEqual("段落 1段落 2");
  });
});
