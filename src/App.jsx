import RandomTheme from "./modules/RandomTheme";
import Content from "./填空题/index";

export default function App() {
  return (
    <div className="h-svh w-svw bg-base-100 text-base-content">
      <RandomTheme></RandomTheme>
      <Content></Content>
    </div>
  );
}
