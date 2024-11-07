import Card from "../components/Card";

export default function App() {
  const question = "{{问题}}";
  const prompt = "{{提示}}";
  return (
    <div className="gap-y-2 flex flex-col p-4">
      <Card title="问题" color="primary">
        {question}
      </Card>
      <Card title="提示" color="info">
        {prompt}
      </Card>
    </div>
  );
}
