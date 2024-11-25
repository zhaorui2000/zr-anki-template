export default class Logger {
  constructor() {
    let minLevel = "debug";
    // 定义日志级别及其顺序
    this.levels = {
      debug: {
        priority: 1,
        style: this.getStyle("#f7f7f9", "#3a3a3a", "#dedede"),
      },
      info: {
        priority: 2,
        style: this.getStyle("#d9edf7", "#31708f", "#bce8f1"),
      },
      warning: {
        priority: 3,
        style: this.getStyle("#fcf8e3", "#8a6d3b", "#faebcc"),
      },
      error: {
        priority: 4,
        style: this.getStyle("#f2dede", "#a94442", "#ebccd1"),
      },
      critical: {
        priority: 5,
        style: this.getStyle("#ffcccc", "#990000", "#ff0000"),
      },
    };

    // 设置最低显示的日志级别
    if (!this.levels[minLevel]) {
      throw new Error(`Invalid log level: ${minLevel}`);
    }
    this.minLevelPriority = this.levels[minLevel].priority;
  }

  getStyle(background, color, border) {
    return `
      background: ${background};
      color: ${color};
      border: 1px solid ${border};
      font-size: 14px;
      padding: 2px 6px;
      border-radius: 3px;
    `;
  }

  log(level, title, message) {
    const levelData = this.levels[level];
    if (!levelData) {
      console.warn(`Invalid log level: ${level}`);
      return;
    }

    if (levelData.priority >= this.minLevelPriority) {
      if (typeof message === "object") {
        // 如果 message 是对象，使用分组样式输出
        console.groupCollapsed(`%c${title}`, levelData.style);
        console.log(message);
        console.groupEnd();
      } else {
        // 普通字符串消息
        console.log(
          `%c${title}%c${message}`,
          levelData.style,
          "color: inherit; font-size: 14px; padding-left: 5px;"
        );
      }
    }
  }

  debug(title, message) {
    this.log("debug", title, message);
  }

  info(title, message) {
    this.log("info", title, message);
  }

  warning(title, message) {
    this.log("warning", title, message);
  }

  error(title, message) {
    this.log("error", title, message);
  }

  critical(title, message) {
    this.log("critical", title, message);
  }
}

// 使用示例
const logger = new Logger();
