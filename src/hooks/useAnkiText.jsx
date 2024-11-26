import MaskButton from "../modules/MaskAnsButton";
export default function useAnkiText(value, { clozeNum, initShow } = {}) {
  const processHTML = (input) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(input, "text/html");

    const transformNode = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        // 动态匹配 {{cX::...}}，根据 clozeNum 控制样式
        const regex = /\{\{c(\d+)::(.*?)\}\}/g;
        let textArr = node.textContent.split(regex);
        let result = [textArr[0]];
        for (let i = 1; i < textArr.length; i = i + 3) {
          const currentClozeNum = textArr[i];
          const content = textArr[Number(i) + 1];
          const part = textArr[i + 2];
          if (Number(currentClozeNum) === Number(clozeNum)) {
            result.push(
              <>
                <MaskButton
                  initShow={initShow}
                  size="xs"
                  color="primary"
                  className="mx-1"
                >
                  {content}
                </MaskButton>
                {part}
              </>
            );
          } else {
            result.push(
              <>
                {content}
                {part}
              </>
            );
          }
        }
        return result;
      }

      if (node.nodeType === Node.ELEMENT_NODE) {
        switch (node.tagName) {
          case "U":
            return <span className="underline">{mapChildren(node)}</span>;
          case "B":
            return <span className="font-bold">{mapChildren(node)}</span>;
          case "I":
            return <span className="italic">{mapChildren(node)}</span>;
          case "BR":
            return <br />;
          default:
            return mapChildren(node);
        }
      }

      return null; // 忽略其他节点
    };

    const mapChildren = (node) =>
      Array.from(node.childNodes).map((child, i) => (
        <>{transformNode(child)}</>
      ));

    return mapChildren(doc.body);
  };

  return <>{processHTML(value)}</>;
}
