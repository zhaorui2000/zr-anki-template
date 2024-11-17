import { useCallback, useState } from "preact/hooks";
import Button from "../components/Button";
import Card from "./../components/Card";
import Radio from "./../components/Radio";
import { v4 as uuid } from "uuid";
import useAnkiText from "../hooks/useAnkiText";
export default function App() {
  const [result, setResult] = useState();
  const [showAnswer, setShowAnswer] = useState(false);

  const question = useAnkiText("{{问题}}");
  const answer = "{{答案}}";
  const name = uuid();

  const calcColor = useCallback(
    function (value) {
      if (!showAnswer) {
        return "";
      }
      if (value === answer.toUpperCase()) {
        return "success";
      }
      if (value === result) {
        return "error";
      }
    },
    [showAnswer]
  );

  const handleClick = function () {
    setShowAnswer(true);
  };
  const handleChange = function (e) {
    setResult(e.target.value);
  };

  return (
    <div className="flex flex-col gap-y-2 p-4">
      <Card color="primary">{question}</Card>
      <Card title="">
        <div className="grid">
          <Radio
            value="Y"
            name={name}
            onChange={handleChange}
            bgColor={calcColor("Y")}
            checkColor={calcColor("Y")}
          >
            ✅ 正确
          </Radio>
          <Radio
            value="N"
            name={name}
            onChange={handleChange}
            bgColor={calcColor("N")}
            checkColor={calcColor("N")}
          >
            ❌ 错误
          </Radio>
        </div>
      </Card>
      <Button color="primary" disabled={showAnswer} onClick={handleClick}>
        确定
      </Button>
    </div>
  );
}
