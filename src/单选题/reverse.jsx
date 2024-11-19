import { useCallback, useState } from "preact/hooks";
import Card from "./../components/Card";
import Radio from "./../components/Radio";
import Tags from "./../modules/Tags";
import { v4 as uuid } from "uuid";
import Extension from "../modules/Extension";
import useAnkiText from "../hooks/useAnkiText";
import BottomAlertWrap from "./../modules/BottomAlertWrap";
import { $result } from "./store";
import { useStore } from "@nanostores/preact";
export default function App() {
  const question = useAnkiText("{{问题}}");
  const optionA = useAnkiText("{{A}}");
  const optionB = useAnkiText("{{B}}");
  const optionC = useAnkiText("{{C}}");
  const optionD = useAnkiText("{{D}}");
  const answer = "{{答案}}";
  const name = uuid();
  const result = useStore($result);

  const calcColor = useCallback(function (value) {
    if (value === answer.toUpperCase()) {
      return "success";
    }
    if (value === result) {
      return "error";
    }
  }, []);

  return (
    <BottomAlertWrap>
      <div className="flex flex-col gap-y-2 p-4">
        <Card color="primary">{question}</Card>
        <Card actions={<Tags></Tags>} title="">
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
        <Extension></Extension>
      </div>
    </BottomAlertWrap>
  );
}
