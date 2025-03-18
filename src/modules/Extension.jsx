import Card from "../components/Card";
import useAnkiText from "../hooks/useAnkiText";

// 补充 卡片

export default function Extension() {
  const extension = useAnkiText("{{补充}}");

  return (
    <Card color="warning" title="补充">
      {extension}
    </Card>
  );
}
