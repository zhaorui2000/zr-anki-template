import Card from "../../components/Card";
import useAnkiText from "../../hooks/useAnkiText";
import PromptCard from "../../modules/PromptCard";

export default function App() {
  const question = useAnkiText("{{背面问题}}");
  const prompt = useAnkiText("{{提示}}");
  return (
    <div className="gap-y-2 flex flex-col p-4">
      <Card title="问题" color="primary">
        {question}
      </Card>
      <PromptCard></PromptCard>
    </div>
  );
}
