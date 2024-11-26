import { useState } from "preact/hooks";
import MaskAnsButton from "./MaskAnsButton";
import MaskPropmptButton from "./MaskPrpmptButton";

export default function MaskButton(props) {
  const { children, ...restProps } = props;
  const [isPrpmpt, setIsPrpmpt] = useState(false);
  const handleClick = function () {
    setIsPrpmpt(true);
  };
  return isPrpmpt ? (
    <MaskPropmptButton {...restProps}>{children}</MaskPropmptButton>
  ) : (
    <MaskAnsButton onClick={handleClick} {...restProps}>
      {children}
    </MaskAnsButton>
  );
}
