import RandomThemeButton from "./modules/RandomTheme";
import Content from "./单选题/index";

export default function App() {
  return (
    <div className="h-svh w-svw bg-base-100 text-base-content">
      <RandomThemeButton></RandomThemeButton>
      <Content></Content>
    </div>
  );
}
