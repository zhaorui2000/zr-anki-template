import { useEffect } from "preact/hooks";
import { fromEvent, merge, timer } from "rxjs";
import { switchMap, takeUntil, tap, map } from "rxjs/operators";
import { loger } from "../store";

function useLongPress(ref, callback, { delay = 500 } = {}) {
  loger.debug("useLongPress 传入参数", { ...arguments });
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // 创建事件流
    const mouseDown$ = fromEvent(element, "mousedown").pipe(map(() => "mouse"));
    const touchStart$ = fromEvent(element, "touchstart").pipe(
      map(() => "touch")
    );
    const start$ = merge(mouseDown$, touchStart$);

    const mouseUp$ = fromEvent(document, "mouseup");
    const touchEnd$ = fromEvent(document, "touchend");
    const end$ = merge(mouseUp$, touchEnd$);

    const longPress$ = start$.pipe(
      switchMap(() =>
        timer(delay).pipe(
          tap(() => callback()), // 在达到 delay 时触发回调
          takeUntil(end$) // 如果提前松开，则终止计时
        )
      )
    );

    const subscription = longPress$.subscribe();

    // 清理订阅
    return () => subscription.unsubscribe();
  }, [ref, callback, delay]);
}

export default useLongPress;
