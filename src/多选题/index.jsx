import { useCallback, useMemo, useState } from "preact/hooks";
import Button from "../components/Button";
import Card from "./../components/Card";
import CheckBox from "./../components/CheckBox";
import { v4 as uuid } from "uuid";
import generateUniqueRandomNumbers from "./../utils/generateUniqueRandomNumbers";
import { cva } from "class-variance-authority";
import useAnkiText from "../hooks/useAnkiText";
export default function App() {
  const [result, setResult] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);

  const optionA = "{{A}}";
  const optionB = "{{B}}";
  const optionC = "{{C}}";
  const optionD = "{{D}}";
  const question = useAnkiText("{{问题}}");
  const answer = "{{答案}}".split("").map((item) => item.toUpperCase());

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
      console.log(result, value);
      if (answer.includes(value)) {
        return "success";
      }
      if (result.includes(value)) {
        return "error";
      }
    },
    [showAnswer]
  );

  const handleClick = function () {
    setShowAnswer(true);
  };
  const handleChange = function (e) {
    let resultSet = new Set(result);
    let value = e.target.value;
    if (e.target.checked) {
      resultSet.add(value);
    } else {
      resultSet.delete(value);
    }
    setResult([...resultSet]);
  };

  return (
    <div className="flex flex-col gap-y-2 p-4">
      <Card title="{{Type}}" color="primary">
        {question}
      </Card>
      <Card title="">
        <div className="grid">
          <CheckBox
            value="A"
            name={name}
            onChange={handleChange}
            bgColor={calcColor("A")}
            checkColor={calcColor("A")}
            className={orderClass({ order: randomOrder[0] })}
          >
            {optionA}
          </CheckBox>
          <CheckBox
            value="B"
            name={name}
            onChange={handleChange}
            bgColor={calcColor("B")}
            checkColor={calcColor("B")}
            className={orderClass({ order: randomOrder[1] })}
          >
            {optionB}
          </CheckBox>
          <CheckBox
            value="C"
            name={name}
            onChange={handleChange}
            bgColor={calcColor("C")}
            checkColor={calcColor("C")}
            className={orderClass({ order: randomOrder[2] })}
          >
            {optionC}
          </CheckBox>
          <CheckBox
            value="D"
            name={name}
            onChange={handleChange}
            bgColor={calcColor("D")}
            checkColor={calcColor("D")}
            className={orderClass({ order: randomOrder[3] })}
          >
            {optionD}
          </CheckBox>
        </div>
      </Card>
      <Button color="primary" disabled={showAnswer} onClick={handleClick}>
        确定
      </Button>
    </div>
  );
}
