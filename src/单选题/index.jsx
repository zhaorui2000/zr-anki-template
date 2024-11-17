import { useCallback, useMemo, useState } from "preact/hooks";
import Button from "../components/Button";
import Card from "./../components/Card";
import Radio from "./../components/Radio";
import { v4 as uuid } from "uuid";
import generateUniqueRandomNumbers from "./../utils/generateUniqueRandomNumbers";
import { cva } from "class-variance-authority";
import useAnkiText from "../hooks/useAnkiText";
export default function App() {
  const [result, setResult] = useState();
  const [showAnswer, setShowAnswer] = useState(false);

  const question = useAnkiText("{{问题}}");

  const optionA = useAnkiText("{{A}}");
  const optionB = useAnkiText("{{B}}");
  const optionC = useAnkiText("{{C}}");
  const optionD = useAnkiText("{{D}}");
  const answer = "{{答案}}";

  const randomOrder = useMemo(() => generateUniqueRandomNumbers(1, 4), []);

  const name = uuid();

  const orderClass = cva("", {
    variants: {
      order: {
        1: "order-1",
        2: "order-2",
        3: "order-3",
        4: "order-4",
      },
    },
  });

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
            value="A"
            name={name}
            onChange={handleChange}
            bgColor={calcColor("A")}
            checkColor={calcColor("A")}
            className={orderClass({ order: randomOrder[0] })}
          >
            {optionA}
          </Radio>
          <Radio
            value="B"
            name={name}
            onChange={handleChange}
            bgColor={calcColor("B")}
            checkColor={calcColor("B")}
            className={orderClass({ order: randomOrder[1] })}
          >
            {optionB}
          </Radio>
          <Radio
            value="C"
            name={name}
            onChange={handleChange}
            bgColor={calcColor("C")}
            checkColor={calcColor("C")}
            className={orderClass({ order: randomOrder[2] })}
          >
            {optionC}
          </Radio>
          <Radio
            value="D"
            name={name}
            onChange={handleChange}
            bgColor={calcColor("D")}
            checkColor={calcColor("D")}
            className={orderClass({ order: randomOrder[3] })}
          >
            {optionD}
          </Radio>
        </div>
      </Card>
      <Button color="primary" disabled={showAnswer} onClick={handleClick}>
        确定
      </Button>
    </div>
  );
}
