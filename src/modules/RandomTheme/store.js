import { persistentAtom } from "@nanostores/persistent";
export const $theme = persistentAtom(
  "theme",
  { name: "", time: 0 },
  {
    decode: JSON.parse,
    encode: JSON.stringify,
  }
);
