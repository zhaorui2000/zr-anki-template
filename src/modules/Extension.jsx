import Card from "../components/Card";

// 补充 卡片

export default function Extension() {
  const extension = "{{补充}}";

  return (
    <Card color="warning" title="补充">
      {extension?.split("<br>").map((item) => (
        <p>{item}</p>
      ))}
    </Card>
  );
}
