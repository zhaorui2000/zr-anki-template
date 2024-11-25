import { useEffect, useRef } from "preact/hooks";
import useLongPress from "./../hooks/useLongPress";
import Radio from "./../components/Radio";
import { createRef } from "preact";

export default function RadioOptions(props) {
  const { children, ...restProps } = props;
  const ref = createRef();
  useLongPress(
    ref,
    () => {
      ref.current.classList.toggle("line-through");
    },
    { delay: 300 }
  );

  return (
    <Radio ref={ref} {...restProps}>
      {children}
    </Radio>
  );
}
