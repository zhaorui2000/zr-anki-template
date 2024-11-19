import RandomThemeButton from "./modules/RandomTheme";
import Content from "./填空题/reverse";

export default function App() {
  return (
    <div className="h-svh w-svw bg-base-100">
      <RandomThemeButton></RandomThemeButton>
      <Content></Content>
    </div>
  );
}
