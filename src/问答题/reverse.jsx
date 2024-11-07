import Card from "../components/Card";
import Tags from "../modules/Tags";

export default function App() {
  const question = "{{问题}}";
  const answer = "{{答案}}";
  const prompt = "{{提示}}";
  const extension = "{{补充}}";
  return (
    <div className="gap-y-2 flex flex-col p-4">
      <Card title="问题" color="primary">
        {question}
      </Card>
      <Card title="提示" color="info">
        {prompt}
      </Card>
      <Card title="答案" actions={<Tags></Tags>}>
        {answer}
      </Card>
      <Card title="补充" color="warning">
        {extension}
      </Card>
    </div>
  );
}
