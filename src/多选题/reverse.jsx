import { useCallback, useMemo, useState } from "preact/hooks";
import Card from "./../components/Card";
import Tags from "./../modules/Tags";
import CheckBox from "./../components/CheckBox";
import { v4 as uuid } from "uuid";
import Extension from "../modules/Extension";
export default function App() {
  const question = "{{问题}}";
  const optionA = "{{A}}";
  const optionB = "{{B}}";
  const optionC = "{{C}}";
  const optionD = "{{D}}";
  const answer = "{{答案}}".split("").map((item) => item.toUpperCase());

  const name = uuid();

  const calcColor = useCallback(function (value) {
    if (answer.includes(value)) {
      return "success";
    }
  }, []);

  return (
    <div className="flex flex-col gap-y-2 p-4">
      <Card title="问题" color="primary">
        {question}
      </Card>
      <Card actions={<Tags></Tags>}>
        <div className="grid">
          <CheckBox
            value="A"
            name={name}
            bgColor={calcColor("A")}
            checkColor={calcColor("A")}
          >
            {optionA}
          </CheckBox>
          <CheckBox
            value="B"
            name={name}
            bgColor={calcColor("B")}
            checkColor={calcColor("B")}
          >
            {optionB}
          </CheckBox>
          <CheckBox
            value="C"
            name={name}
            bgColor={calcColor("C")}
            checkColor={calcColor("C")}
          >
            {optionC}
          </CheckBox>
          <CheckBox
            value="D"
            name={name}
            bgColor={calcColor("D")}
            checkColor={calcColor("D")}
          >
            {optionD}
          </CheckBox>
        </div>
      </Card>
      <Extension></Extension>
    </div>
  );
}
