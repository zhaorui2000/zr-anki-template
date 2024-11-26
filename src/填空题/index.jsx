import { useEffect } from "preact/hooks";
import Card from "../components/Card";
import useAnkiText from "../hooks/useAnkiText";
import Tags from "./../modules/Tags";
import getClozeNum from "./utils/getClozeNum";
import { $clozeNum } from "./store";
import { useStore } from "@nanostores/preact";

export default function App() {
  useEffect(() => {
    $clozeNum.set(getClozeNum());
  }, []);
  const clozeNum = useStore($clozeNum);
  const question = useAnkiText("{{问题}}{{c1::123456}}", {
    clozeNum: 1,
  });

  return (
    <>
      <div className="grid gap-y-2 px-2">
        <Card title="填空" actions={<Tags isShow={false}></Tags>}>
          <div>{question}</div>
        </Card>
      </div>
    </>
  );
}
