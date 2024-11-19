import { useEffect } from "preact/hooks";
import getRandomInt from "../../utils/getRandomInt";
import { $theme } from "./store";
import { useStore } from "@nanostores/preact";
import { produce } from "immer";
import dayjs from "dayjs";
export default function RandomTheme() {
  const theme = useStore($theme);
  useEffect(() => {
    if (dayjs().subtract(dayjs(theme.time)).valueOf() > 30 * 60 * 1000) {
      $theme.set(
        produce($theme.get(), (draft) => {
          let name = themeArray[getRandomInt(0, themeArray.length - 1)];
          return { name, time: dayjs().valueOf() };
        })
      );
    }
    document.documentElement.dataset.theme = theme.name;
  }, []);
  const themeArray = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];
}
