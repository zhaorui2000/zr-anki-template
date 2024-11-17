import { cva, cx } from "class-variance-authority";
export default function Button(props) {
  const {
    disabled,
    children,
    color,
    size,
    outline,
    square,
    circle,
    className,
    ...restProps
  } = props;
  const buttonClass = cva(["btn"], {
    variants: {
      color: {
        primary: ["btn-primary"],
        secondary: ["btn-secondary"],
        accent: ["btn-accent"],
        neutral: ["btn-neutral"],
        base: ["base-100"],
        info: ["btn-info"],
        success: ["btn-success"],
        warning: ["btn-warning"],
        error: ["btn-error"],
      },
      size: {
        lg: ["btn-lg"],
        md: [],
        sm: ["btn-sm"],
        xs: ["btn-xs"],
      },
      outline: {
        true: ["btn-outline"],
        false: [],
      },
      square: {
        true: ["btn-square"],
        false: [],
      },
      circle: {
        true: ["btn-circle"],
        false: [""],
      },
      animation: {
        true: [""],
        false: ["no-animation"],
      },
    },
    defaultVariants: {
      color: "base",
      size: "sm",
      outline: false,
      square: false,
      circle: false,
      animation: true,
    },
  });
  return (
    <button
      disabled={disabled}
      className={cx(
        buttonClass({ color, size, outline, square, circle }),
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}
