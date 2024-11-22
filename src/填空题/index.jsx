import Card from "../components/Card";
import useAnkiText from "../hooks/useAnkiText";
import Tags from "./../modules/Tags";

export default function App() {
  const clozeNum = `{{#c1}}1{{/c1}}{{#c2}}2{{/c2}}{{#c3}}3{{/c3}}{{#c4}}4{{/c4}}{{#c5}}5{{/c5}}{{#c6}}6{{/c6}}{{#c7}}7{{/c7}}{{#c8}}8{{/c8}}{{#c9}}9{{/c9}}{{#c10}}10{{/c10}}`;
  const question = useAnkiText("{{问题}}", {
    clozeNum,
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
