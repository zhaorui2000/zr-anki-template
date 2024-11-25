import { useEffect, useState } from "preact/hooks";
import Button from "./../components/Button";
import { cx } from "class-variance-authority";
export default function MaskButton(props) {
  const { initShow = false, children, className, ...restProps } = props;
  const [isShowAns, setIsShowAns] = useState(initShow);
  const [isPrompt, setIsPrompt] = useState(false);
  const PROMPT_NUM = 3;
  const handleClick = function () {
    if (children.length > PROMPT_NUM) {
      setIsPrompt(true);
    } else {
      setIsShowAns(true);
    }
  };
  const renderElement = function () {
    if (isShowAns) {
      return (
        <Button className={className} {...restProps}>
          {children}
        </Button>
      );
    } else {
      if (isPrompt) {
        return children.split("").map((item) => (
          <MaskButton initShow={false} className={cx(className)} {...restProps}>
            {item}
          </MaskButton>
        ));
      } else {
        return (
          <Button className={className} onClick={handleClick} {...restProps}>
            {children.length > PROMPT_NUM
              ? "".padEnd(PROMPT_NUM, "＿")
              : "".padEnd(PROMPT_NUM, "?")}
          </Button>
        );
      }
    }
  };
  return renderElement();
}
