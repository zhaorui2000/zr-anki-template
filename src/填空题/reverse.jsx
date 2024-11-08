import Card from "../components/Card";
import MaskButton from "../modules/MaskButton";
import Tags from "./../modules/Tags";

export default function App() {
  const cardOrder = `{{#c1}}1{{/c1}}{{#c2}}2{{/c2}}{{#c3}}3{{/c3}}{{#c4}}4{{/c4}}{{#c5}}5{{/c5}}{{#c6}}6{{/c6}}{{#c7}}7{{/c7}}{{#c8}}8{{/c8}}{{#c9}}9{{/c9}}{{#c10}}10{{/c10}}`;
  const questionArray = "{{问题}}".split(/\{\{|\}\}/);
  const extension = "{{补充}}";
  return (
    <div className="grid gap-y-2 px-2">
      <Card title="填空" actions={<Tags></Tags>}>
        <div>
          {questionArray.map((item, index) => {
            if (index % 2 === 0) {
              return <span>{item}</span>;
            }
            if (Number(item.slice(1, 2)) === Number(cardOrder)) {
              return (
                <MaskButton initShow size="xs" color="primary" className="mx-1">
                  {item.slice(4)}
                </MaskButton>
              );
            } else {
              return <span>{item.slice(4)}</span>;
            }
          })}
        </div>
      </Card>
      <Card color="warning" title="补充">
        {extension}
      </Card>
    </div>
  );
}
