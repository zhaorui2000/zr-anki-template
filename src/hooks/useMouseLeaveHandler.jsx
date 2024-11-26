import { useEffect, useState } from "preact/hooks";
import { fromEvent, filter, merge } from "rxjs";

export default function useMouseLeaveHandler(parentRef) {
  const [isPress, setIsPress] = useState(false);

  // 用于创建和取消订阅的辅助函数
  const createSubscription = (observable, callback) => {
    return observable.subscribe(callback);
  };

  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;

    // 监听鼠标按下和触摸开始事件
    const mouseDown$ = fromEvent(parent, "mousedown");
    const touchStart$ = fromEvent(parent, "touchstart");

    // 合并鼠标按下和触摸开始事件
    const pressStart$ = merge(mouseDown$, touchStart$);

    // 监听鼠标松开和触摸结束事件
    const mouseUp$ = fromEvent(parent, "mouseup");
    const touchEnd$ = fromEvent(parent, "touchend");

    // 合并鼠标松开和触摸结束事件
    const pressEnd$ = merge(mouseUp$, touchEnd$);

    // 创建并存储订阅
    const pressStartSubscription = createSubscription(pressStart$, () =>
      setIsPress(true)
    );
    const pressEndSubscription = createSubscription(pressEnd$, () =>
      setIsPress(false)
    );

    // 清理事件订阅
    return () => {
      pressStartSubscription.unsubscribe();
      pressEndSubscription.unsubscribe();
    };
  }, [parentRef]);

  useEffect(() => {
    const parent = parentRef.current;
    if (!parent) return;

    const buttons = parent.querySelectorAll("button");
    const buttonSubscriptions = [];

    // 遍历每个按钮，创建订阅
    buttons.forEach((button) => {
      const mouseLeave$ = fromEvent(button, "mouseleave").pipe(
        filter((e) => e.target === button) // 确保是当前按钮触发的移出事件
      );
      const mouseenter$ = fromEvent(button, "mouseenter").pipe(
        filter((e) => e.target === button) // 确保是当前按钮触发的移出事件
      );

      const mouseLeaveSubscription = createSubscription(
        merge(mouseLeave$, mouseenter$),
        () => {
          console.log(isPress);
          if (isPress) {
            button.click();
          }
        }
      );

      buttonSubscriptions.push(mouseLeaveSubscription); // 保存订阅
    });

    // 清理按钮事件订阅
    return () => {
      buttonSubscriptions.forEach((sub) => sub.unsubscribe());
    };
  }, [parentRef, isPress]);
}
