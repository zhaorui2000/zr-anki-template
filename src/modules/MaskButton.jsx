import { useState } from "preact/hooks";
import Button from "./../components/Button";
export default function MaskButton(props) {
  const { initShow = false, children, ...restProps } = props;
  const [show, setShow] = useState(initShow);
  const handleClick = function () {
    setShow(true);
  };
  return (
    <Button onClick={handleClick} {...restProps}>
      {show ? children : "_______"}
    </Button>
  );
}
