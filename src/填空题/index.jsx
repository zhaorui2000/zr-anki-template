import Card from "../components/Card";
import MaskButton from "../modules/MaskButton";

export default function App() {
  const cardOrder = `{{#c1}}1{{/c1}}{{#c2}}2{{/c2}}{{#c3}}3{{/c3}}{{#c4}}4{{/c4}}{{#c5}}5{{/c5}}{{#c6}}6{{/c6}}{{#c7}}7{{/c7}}{{#c8}}8{{/c8}}{{#c9}}9{{/c9}}{{#c10}}10{{/c10}}`;
  const questionArray = "{{问题}}".split(/\{\{|\}\}/);
  return (
    <div className="grid gap-y-2 px-2">
      {/* {{cloze:问题}} */}
      <Card title="填空">
        <div>
          {questionArray.map((item, index) => {
            if (index % 2 === 0) {
              return <span>item</span>;
            }
            if (Number(item.slice(1, 2)) === Number(cardOrder)) {
              return (
                <MaskButton size="xs" color="primary" className="mx-1">
                  {item.slice(4)}
                </MaskButton>
              );
            } else {
              return <span>{item.slice(4)}</span>;
            }
          })}
        </div>
      </Card>
    </div>
  );
}
