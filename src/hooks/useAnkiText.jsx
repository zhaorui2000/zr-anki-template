export default function useAnkiText(value) {
  let arr = value
    .trim()
    .split("<br>")
    .filter((item) => !!item);
  let result = <></>;
  arr.map((item, index) => {
    let itemFormat = item.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
    // 处理 br
    if (index > 0 && arr.length > 1) {
      result = (
        <>
          {result}
          <br></br>
        </>
      );
    }
    // 处理 标签
    if (/(.*?)<(.+?)>(.*?)<\/.?>/.test(itemFormat)) {
      itemFormat.replace(/(.*?)<(.+?)>(.*?)<\/.?>(.*)/g, (_, ...args) => {
        const [pre, tag, value, after] = args;
        switch (tag?.toUpperCase()) {
          case "I":
            result = (
              <>
                {result}
                <span>{pre}</span>
                <span className="italic inline">{value}</span>
                <span>{after}</span>
              </>
            );
            break;
          case "B":
            result = (
              <>
                {result}
                <span>{pre}</span>
                <span className="font-bold inline">{value}</span>
                <span>{after}</span>
              </>
            );
            break;
          case "U":
            result = (
              <>
                {result}
                <span>{pre}</span>
                <span className="underline inline">{value}</span>
                <span>{after}</span>
              </>
            );
            break;
        }
        return "";
      });
    } else {
      result = (
        <>
          {result}
          <span>{itemFormat}</span>
        </>
      );
    }
  });
  return <div>{result}</div>;
}
