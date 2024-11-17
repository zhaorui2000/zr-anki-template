import { useState } from "preact/hooks";
import Badge from "../components/Badge";
import Button from "../components/Button";

// 展示anki的 Tags 内容
export default function Tags(props) {
  const { isShow: isShowProps = true } = props;
  const strArr = "{{Tags}}".split(" ").filter((item) => !!item);
  const [isShow, setIsShow] = useState(isShowProps);
  const handleClick = function () {
    setIsShow(true);
  };
  const renderTag = function () {
    return strArr.length > 0
      ? strArr.map((item) => {
          return <Badge size="sm">{item}</Badge>;
        })
      : null;
  };
  return isShow ? (
    renderTag()
  ) : (
    <Button outline animation={false} size="xs" onClick={handleClick}>
      ……
    </Button>
  );
}
