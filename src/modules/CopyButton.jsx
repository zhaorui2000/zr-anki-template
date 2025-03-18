import { useState } from "preact/hooks";
import Button from "../components/Button";

// 补充 卡片

export default function CopyButton(props) {
  const { question, optionA, optionB, optionC, optionD } = props;
  let [loading, setLoading] = useState(false);
  let [result, setResult] = useState(false);

  async function handleClick() {
    setLoading(true);
    setResult(false);
    const textToCopy =
      `${question}\n\n` +
      `  A. ${optionA}\n` +
      `  B. ${optionB}\n` +
      `  C. ${optionC}\n` +
      `  D. ${optionD}`;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setResult(true);
    } catch (err) {
      setResult(false);
    }
    setLoading(false);
  }

  return (
    <Button color="primary" loading={loading} onClick={handleClick}>
      复制题目{result && "-成功"}
    </Button>
  );
}
