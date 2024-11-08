import { useCallback, useState } from "preact/hooks";
import Card from "./../components/Card";
import Radio from "./../components/Radio";
import Tags from "./../modules/Tags";
import { v4 as uuid } from "uuid";
export default function App() {
  const question = "{{问题}}";
  const optionA = "{{A}}";
  const optionB = "{{B}}";
  const optionC = "{{C}}";
  const optionD = "{{D}}";
  const answer = "{{答案}}";
  const extension = "{{补充}}";
  const name = uuid();

  const calcColor = useCallback(function (value) {
    if (value === answer.toUpperCase()) {
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
          <Radio
            value="A"
            name={name}
            bgColor={calcColor("A")}
            checkColor={calcColor("A")}
          >
            {optionA}
          </Radio>
          <Radio
            value="B"
            name={name}
            bgColor={calcColor("B")}
            checkColor={calcColor("B")}
          >
            {optionB}
          </Radio>
          <Radio
            value="C"
            name={name}
            bgColor={calcColor("C")}
            checkColor={calcColor("C")}
          >
            {optionC}
          </Radio>
          <Radio
            value="D"
            name={name}
            bgColor={calcColor("D")}
            checkColor={calcColor("D")}
          >
            {optionD}
          </Radio>
        </div>
      </Card>
      <Card color="warning" title="补充">
        {extension}
      </Card>
    </div>
  );
}
