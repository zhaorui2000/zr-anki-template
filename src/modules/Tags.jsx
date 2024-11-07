import { useEffect, useState } from "preact/hooks";
import Badge from "../components/Badge";

// 展示anki的 Tags 内容
export default function Tags() {
  const strArr = "{{Tags}}".split(" ").filter((item) => !!item);
  return strArr.length > 0
    ? strArr.map((item) => {
        return <Badge>{item}</Badge>;
      })
    : null;
}
