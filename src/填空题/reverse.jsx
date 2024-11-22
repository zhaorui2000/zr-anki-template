import Card from "../components/Card";
import Tags from "./../modules/Tags";
import Extension from "./../modules/Extension";
import BottomAlertWrap from "./../modules/BottomAlertWrap";
import useAnkiText from "../hooks/useAnkiText";
import { $clozeNum } from "./store";
import { useStore } from "@nanostores/preact";
import { useEffect } from "preact/hooks";

export default function App() {
  useEffect(() => {
    return () => {
      $clozeNum.set(undefined);
    };
  }, []);
  const clozeNum = useStore($clozeNum);
  const question = useAnkiText("{{问题}}", { clozeNum, initShow: true });

  return (
    <BottomAlertWrap>
      <div className="grid gap-y-2 px-2">
        <Card actions={<Tags></Tags>}>
          <div>{question}</div>
        </Card>
        <Extension></Extension>
      </div>
    </BottomAlertWrap>
  );
}
