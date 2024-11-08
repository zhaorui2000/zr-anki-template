import { cva, cx } from "class-variance-authority";
export default function Radio(props) {
  const {
    name,
    disabled,
    children,
    checkColor,
    size,
    className,
    textClass,
    bgColor,
    ...restProps
  } = props;
  const radioClass = cva(["radio"], {
    variants: {
      checkColor: {
        primary: ["radio-primary"],
        secondary: ["radio-secondary"],
        accent: ["radio-accent"],
        neutral: ["radio-neutral"],
        base: ["base-100"],
        info: ["radio-info"],
        success: ["radio-success"],
        warning: ["radio-warning"],
        error: ["radio-error"],
      },
      bgColor: {
        primary: ["bg-primary"],
        secondary: ["bg-secondary"],
        accent: ["bg-accent"],
        neutral: ["bg-neutral"],
        base: ["base-100"],
        info: ["bg-info"],
        success: ["bg-success"],
        warning: ["bg-warning"],
        error: ["bg-error"],
      },
      size: {
        lg: ["radio-lg"],
        md: ["radio-md"],
        sm: ["radio-sm"],
        xs: ["radio-xs"],
      },
    },
    defaultVariants: {
      checkColor: "base",
      size: "sm",
      bgColor: "base",
    },
  });
  return (
    <div class={cx("form-control", "w-fit", className)}>
      <label class="label cursor-pointer">
        <input
          type="radio"
          name={name}
          disabled={disabled}
          class={radioClass({ checkColor, size, bgColor })}
          {...restProps}
        />
        <span class={cx("label-text", "ml-2", textClass)}>{children}</span>
      </label>
    </div>
  );
}
