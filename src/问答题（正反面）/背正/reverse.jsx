import Card from "../../components/Card";
import useAnkiText from "../../hooks/useAnkiText";
import Tags from "../../modules/Tags";
import PromptCard from "../../modules/PromptCard";

export default function App() {
  const question = useAnkiText("{{背面问题}}");
  const answer = useAnkiText("{{正面问题}}");
  const prompt = useAnkiText("{{提示}}");
  const extension = useAnkiText("{{补充}}");
  return (
    <div className="gap-y-2 flex flex-col p-4">
      <Card title="问题" color="primary">
        {question}
      </Card>
      <PromptCard></PromptCard>
      <Card title="答案" actions={<Tags></Tags>}>
        {answer}
      </Card>
      <Card title="补充" color="warning">
        {extension}
      </Card>
    </div>
  );
}
