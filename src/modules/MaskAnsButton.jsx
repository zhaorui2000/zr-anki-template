import { useState } from "preact/hooks";
import Button from "../components/Button";
import { forwardRef } from "preact/compat";
const MaskAnsButton = forwardRef((props, ref) => {
  const { initShow = false, children, className, ...restProps } = props;
  const [isShowAns, setIsShowAns] = useState(initShow);
  const PROMPT_NUM = 3;
  const handleClick = function () {
    setIsShowAns(true);
  };
  return (
    <Button
      ref={ref}
      className={className}
      onClick={handleClick}
      {...restProps}
    >
      {isShowAns
        ? children
        : children.length > PROMPT_NUM
        ? "".padEnd(PROMPT_NUM, "＿")
        : "".padEnd(1, "?")}
    </Button>
  );
});
export default MaskAnsButton;
