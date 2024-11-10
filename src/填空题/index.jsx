import Card from "../components/Card";
import MaskButton from "../modules/MaskButton";

export default function App() {
  const cardOrder = `{{#c1}}1{{/c1}}{{#c2}}2{{/c2}}{{#c3}}3{{/c3}}{{#c4}}4{{/c4}}{{#c5}}5{{/c5}}{{#c6}}6{{/c6}}{{#c7}}7{{/c7}}{{#c8}}8{{/c8}}{{#c9}}9{{/c9}}{{#c10}}10{{/c10}}`;
  const questionArray = "{{问题}}".split(/\{\{|\}\}/);

  const renderText = function (value) {
    if (value.indexOf("<br>") !== -1) {
      let arr = value.split("<br>").filter((item) => !!item);
      return arr.map((item, index) => {
        if (index === 0 && arr.length > 1) {
          return <span>{item}</span>;
        } else {
          return (
            <>
              <br></br>
              <span>{item}</span>
            </>
          );
        }
      });
    }
    return <span>{value}</span>;
  };
  return (
    <div className="grid gap-y-2 px-2">
      <Card title="{{Type}}">
        <div>
          {questionArray.map((item, index) => {
            if (index % 2 === 0) {
              return renderText(item);
            }
            if (Number(item.slice(1, 2)) === Number(cardOrder)) {
              return (
                <MaskButton size="xs" color="primary" className="mx-1">
                  {item.slice(4)}
                </MaskButton>
              );
            } else {
              return renderText(item.slice(4));
            }
          })}
        </div>
      </Card>
    </div>
  );
}
