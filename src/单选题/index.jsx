import { useEffect, useMemo, useState } from "preact/hooks";
import Card from "./../components/Card";
import RadioOptions from "./../modules/RadioOptions";
import { v4 as uuid } from "uuid";
import generateUniqueRandomNumbers from "./../utils/generateUniqueRandomNumbers";
import { cva } from "class-variance-authority";
import useAnkiText from "../hooks/useAnkiText";
import { $result } from "./store";
export default function App() {
  // 初始化答题结果存储
  useEffect(() => {
    // ······· 初始化 ·······
    $result.set("");
    // ------- 初始化 -------
  }, []);

  // 从Anki模板获取题目和选项内容
  const question = useAnkiText("{{问题}}"); // 问题文本
  const optionA = useAnkiText("{{A}}"); // 选项A
  const optionB = useAnkiText("{{B}}"); // 选项B
  const optionC = useAnkiText("{{C}}"); // 选项C
  const optionD = useAnkiText("{{D}}"); // 选项D

  // 生成1-4的随机排列顺序（用于选项乱序）
  const randomOrder = useMemo(() => generateUniqueRandomNumbers(1, 4), []);
  // 生成唯一标识符用于单选按钮分组
  const name = uuid();

  // 创建动态排序class（使用CVA库）
  const orderClass = cva("", {
    variants: {
      order: {
        // 定义不同顺序对应的CSS类
        1: "order-1",
        2: "order-2",
        3: "order-3",
        4: "order-4",
      },
    },
  });

  // 处理选项变化的回调函数
  const handleChange = function (e) {
    $result.set(e.target.value); // 存储用户选择结果
  };

  // 组件渲染结构
  return (
    <div className="flex flex-col gap-y-2 p-4">
      {/* 问题展示卡片 */}
      <Card color="primary">{question}</Card>

      {/* 选项容器 */}
      <Card title="">
        <div className="grid">
          {/* 使用随机顺序渲染选项 */}
          <RadioOptions
            value="A"
            name={name}
            onChange={handleChange}
            className={orderClass({ order: randomOrder[0] })} // 应用随机顺序class
          >
            {optionA}
          </RadioOptions>
          <RadioOptions
            value="B"
            name={name}
            onChange={handleChange}
            className={orderClass({ order: randomOrder[1] })}
          >
            {optionB}
          </RadioOptions>
          <RadioOptions
            value="C"
            name={name}
            onChange={handleChange}
            className={orderClass({ order: randomOrder[2] })}
          >
            {optionC}
          </RadioOptions>
          <RadioOptions
            value="D"
            name={name}
            onChange={handleChange}
            className={orderClass({ order: randomOrder[3] })}
          >
            {optionD}
          </RadioOptions>
        </div>
      </Card>
    </div>
  );
}
