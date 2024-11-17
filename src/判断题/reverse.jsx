import { useCallback } from "preact/hooks";
import Card from "../components/Card";
import Radio from "../components/Radio";
import { v4 as uuid } from "uuid";
import useAnkiText from "../hooks/useAnkiText";
import Extension from "./../modules/Extension";

export default function App() {
  const question = useAnkiText("{{问题}}");
  const answer = "{{答案}}";
  const name = uuid();

  const calcColor = useCallback(function (value) {
    if (value === answer.toUpperCase()) {
      return "success";
    }
  }, []);

  return (
    <div className="flex flex-col gap-y-2 p-4">
      <Card color="primary">{question}</Card>
      <Card title="">
        <div className="grid">
          <Radio
            value="Y"
            name={name}
            bgColor={calcColor("Y")}
            checkColor={calcColor("Y")}
          >
            ✅ 正确
          </Radio>
          <Radio
            value="N"
            name={name}
            bgColor={calcColor("N")}
            checkColor={calcColor("N")}
          >
            ❌ 错误
          </Radio>
        </div>
      </Card>
      <Extension></Extension>
    </div>
  );
}
