import { useState } from "preact/hooks";
import Button from "../components/Button";
import MaskAnsButton from "./MaskAnsButton";
export default function MaskPropmptButton(props) {
  const { initShow = false, children, className, ...restProps } = props;
  const [isShowPropmpt, setIsShowPropmpt] = useState(initShow);
  const PROMPT_NUM = 3;
  return (
    <div>
      {children.split("").map((item) => {
        return <MaskAnsButton>{item}</MaskAnsButton>;
      })}
    </div>
  );
}
