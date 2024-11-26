import { useState } from "preact/hooks";
import Button from "../../components/Button";
import { forwardRef } from "preact/compat";
const MaskAnsButton = forwardRef((props, ref) => {
  const {
    initShow = false,
    children,
    className,
    onClick,
    ...restProps
  } = props;
  const [isShowAns, setIsShowAns] = useState(initShow);
  const handleClick = function () {
    if (!(onClick?.() === false)) {
      setIsShowAns(true);
    }
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
        : children.length > 1
        ? "".padEnd(5, "＿")
        : "".padEnd(1, "?")}
    </Button>
  );
});
export default MaskAnsButton;
