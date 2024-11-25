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
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "retro",
    "cyberpunk",
    "valentine",
    "garden",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "cmyk",
    "autumn",
    "acid",
    "lemonade",
    "winter",
    "nord",
  ];
}
