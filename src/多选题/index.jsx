import { useCallback, useEffect, useMemo, useState } from "preact/hooks";
import Card from "./../components/Card";
import CheckBox from "./../components/CheckBox";
import { v4 as uuid } from "uuid";
import generateUniqueRandomNumbers from "./../utils/generateUniqueRandomNumbers";
import { cva } from "class-variance-authority";
import useAnkiText from "../hooks/useAnkiText";
import { $result } from "./store";
import { useStore } from "@nanostores/preact";
export default function App() {
  const result = useStore($result);
  const optionA = useAnkiText("{{A}}");
  const optionB = useAnkiText("{{B}}");
  const optionC = useAnkiText("{{C}}");
  const optionD = useAnkiText("{{D}}");
  const question = useAnkiText("{{问题}}");

  useEffect(() => {
    $result.set("");
  }, []);

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

  const handleChange = function (e) {
    let resultSet = new Set(result);
    let value = e.target.value;
    if (e.target.checked) {
      resultSet.add(value);
    } else {
      resultSet.delete(value);
    }
    $result.set([...resultSet]);
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
            className={orderClass({ order: randomOrder[0] })}
          >
            {optionA}
          </CheckBox>
          <CheckBox
            value="B"
            name={name}
            onChange={handleChange}
            className={orderClass({ order: randomOrder[1] })}
          >
            {optionB}
          </CheckBox>
          <CheckBox
            value="C"
            name={name}
            onChange={handleChange}
            className={orderClass({ order: randomOrder[2] })}
          >
            {optionC}
          </CheckBox>
          <CheckBox
            value="D"
            name={name}
            onChange={handleChange}
            className={orderClass({ order: randomOrder[3] })}
          >
            {optionD}
          </CheckBox>
        </div>
      </Card>
    </div>
  );
}
