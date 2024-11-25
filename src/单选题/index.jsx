import { useEffect, useMemo, useState } from "preact/hooks";
import Card from "./../components/Card";
import RadioOptions from "./../modules/RadioOptions";
import { v4 as uuid } from "uuid";
import generateUniqueRandomNumbers from "./../utils/generateUniqueRandomNumbers";
import { cva } from "class-variance-authority";
import useAnkiText from "../hooks/useAnkiText";
import { $result } from "./store";
export default function App() {
  useEffect(() => {
    // ······· 初始化 ·······
    $result.set("");
    // ------- 初始化 -------
  }, []);

  const question = useAnkiText("{{问题}}");
  const optionA = useAnkiText("{{A}}");
  const optionB = useAnkiText("{{B}}");
  const optionC = useAnkiText("{{C}}");
  const optionD = useAnkiText("{{D}}");
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
    $result.set(e.target.value);
  };

  return (
    <div className="flex flex-col gap-y-2 p-4">
      <Card color="primary">{question}</Card>
      <Card title="">
        <div className="grid">
          <RadioOptions
            value="A"
            name={name}
            onChange={handleChange}
            className={orderClass({ order: randomOrder[0] })}
          >
            {optionA}
          </RadioOptions>
          <RadioOptions
            value="B"
            name={name}
            onChange={handleChange}
            className={orderClass({ order: randomOrder[1] })}
          >
            {optionB}
          </RadioOptions>
          <RadioOptions
            value="C"
            name={name}
            onChange={handleChange}
            className={orderClass({ order: randomOrder[2] })}
          >
            {optionC}
          </RadioOptions>
          <RadioOptions
            value="D"
            name={name}
            onChange={handleChange}
            className={orderClass({ order: randomOrder[3] })}
          >
            {optionD}
          </RadioOptions>
        </div>
      </Card>
    </div>
  );
}
