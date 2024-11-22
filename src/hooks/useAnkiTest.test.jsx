import { renderHook, render } from "@testing-library/preact";
import useAnkiText from "./useAnkiText";
import { expect, test } from "vitest";

describe("单标签", () => {
  test('should increment after "Increment" button is clicked', async () => {
    const { result } = renderHook(() => useAnkiText("1<br/>23<br/>456"));
    const { container } = render(result.current);
    expect(container.innerHTML).toMatch("1<br>23<br>456");
  });
});

describe("无标签", () => {
  test('should increment after "Increment" button is clicked', async () => {
    const { result } = renderHook(() => useAnkiText("123456"));
    const { container } = render(result.current);
    expect(container.innerHTML).toMatch("123456");
  });
});

describe("闭合标签", () => {
  test('should increment after "Increment" button is clicked', async () => {
    const { result } = renderHook(() =>
      useAnkiText("<div><span>1</span>23</div><p>4</p>5<u>6</u>")
    );
    const { container } = render(result.current);
    expect(container.innerHTML).toMatch(
      '12345<span class="underline">6</span>'
    );
  });
});

describe("闭合标签、单标签混合", () => {
  test('should increment after "Increment" button is clicked', async () => {
    const { result } = renderHook(() =>
      useAnkiText("<div><span>1</span><br/>23</div><p>4</p>5<br/>6")
    );
    const { container } = render(result.current);
    expect(container.innerHTML).toMatch("1<br>2345<br>6");
  });
});

describe("填空", () => {
  test('should replace "{{cX::...}}" with <MaskButton> for specific clozeNum', async () => {
    const { result } = renderHook(() =>
      useAnkiText("这是{{c1::完形填空}}题目<br/>下一行", { clozeNum: 1 })
    );
    const { container } = render(result.current);
    expect(container.innerHTML).toEqual(
      '这是<button class="btn btn-primary btn-xs mx-1">_______</button>题目<br>下一行'
    );
  });
});
