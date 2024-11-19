import { useEffect } from "preact/hooks";
import getRandomInt from "../utils/getRandomInt";
export default function RandomTheme() {
  useEffect(() => {
    changeRandomNum();
  }, []);
  const changeRandomNum = function () {
    const randomNum = getRandomInt(0, themeArray.length - 1);
    document.documentElement.dataset.theme = themeArray[randomNum];
  };
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
