import MaskAnsButton from "./MaskAnsButton";
import useSwipeClick from "../../hooks/useMouseLeaveHandler";
import { createRef } from "preact";
export default function MaskPrpmptButton(props) {
  const { children, ...restProps } = props;
  const containerRef = createRef();
  useSwipeClick(containerRef, () => {
    console.log("---");
  });
  return (
    <div ref={containerRef} className="inline-block p-2">
      {children.split("").map((item) => {
        return (
          <MaskAnsButton initShow={false} {...restProps}>
            {item}
          </MaskAnsButton>
        );
      })}
    </div>
  );
}
