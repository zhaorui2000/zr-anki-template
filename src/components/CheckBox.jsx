import { cva, cx } from "class-variance-authority";
export default function CheckBox(props) {
  const {
    checkColor,
    bgColor,
    size,
    children,
    checked,
    className,
    ...restProps
  } = props;
  const checkClass = cva(["checkbox"], {
    variants: {
      checkColor: {
        primary: ["checkbox-primary"],
        secondary: ["checkbox-secondary"],
        accent: ["checkbox-accent"],
        neutral: ["checkbox-neutral"],
        base: ["base-100"],
        info: ["checkbox-info"],
        success: ["checkbox-success"],
        warning: ["checkbox-warning"],
        error: ["checkbox-error"],
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
        lg: ["checkbox-lg"],
        md: ["checkbox-md"],
        sm: ["checkbox-sm"],
        xs: ["checkbox-xs"],
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
      <label className="cursor-pointer label">
        <input
          type="checkbox"
          checked={checked}
          className={checkClass({ checkColor, size, bgColor })}
          {...restProps}
        />
        <span className="label-text ml-2">{children}</span>
      </label>
    </div>
  );
}
