import { useCallback, useState } from "preact/hooks";
import Button from "../components/Button";
import Card from "./../components/Card";
import Radio from "./../components/Radio";
import { v4 as uuid } from "uuid";
export default function App() {
  const [result, setResult] = useState();
  const [showAnswer, setShowAnswer] = useState(false);

  const question = "{{问题}}";
  const optionA = "{{A}}";
  const optionB = "{{B}}";
  const optionC = "{{C}}";
  const optionD = "{{D}}";
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
      <Card title="问题" color="primary">
        {question}
      </Card>
      <Card>
        <Radio
          value="A"
          name={name}
          onChange={handleChange}
          bgColor={calcColor("A")}
          checkColor={calcColor("A")}
        >
          {optionA}
        </Radio>
        <Radio
          value="B"
          name={name}
          onChange={handleChange}
          bgColor={calcColor("B")}
          checkColor={calcColor("B")}
        >
          {optionB}
        </Radio>
        <Radio
          value="C"
          name={name}
          onChange={handleChange}
          bgColor={calcColor("C")}
          checkColor={calcColor("C")}
        >
          {optionC}
        </Radio>
        <Radio
          value="D"
          name={name}
          onChange={handleChange}
          bgColor={calcColor("D")}
          checkColor={calcColor("D")}
        >
          {optionD}
        </Radio>
      </Card>
      <Button color="primary" disabled={showAnswer} onClick={handleClick}>
        确定
      </Button>
    </div>
  );
}
