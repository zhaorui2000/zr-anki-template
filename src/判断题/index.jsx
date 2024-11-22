import { useState } from "preact/hooks";
import Card from "./../components/Card";
import Radio from "./../components/Radio";
import { v4 as uuid } from "uuid";
import useAnkiText from "../hooks/useAnkiText";
import { $result } from "./store";
import { useEffect } from "preact/hooks";
export default function () {
  useEffect(() => {
    // ······· 初始化 ·······
    $result.set("");
    // ------- 初始化 -------
  }, []);
  const [result, setResult] = useState();
  const question = useAnkiText("{{问题}}");
  const name = uuid();

  const handleChange = function (e) {
    $result.set(e.target.value);
  };

  return (
    <div className="flex flex-col gap-y-2 p-4">
      <Card color="primary">{question}</Card>
      <Card title="">
        <div className="grid">
          <Radio value="Y" name={name} onChange={handleChange}>
            ✅ 正确
          </Radio>
          <Radio value="N" name={name} onChange={handleChange}>
            ❌ 错误
          </Radio>
        </div>
      </Card>
    </div>
  );
}
