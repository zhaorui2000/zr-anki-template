import { cva } from "class-variance-authority";

export default function Badge(props) {
  const { title, color, children } = props;
  const badgeClass = cva(["badge"], {
    variants: {
      color: {
        primary: ["badge-primary"],
        secondary: ["badge-secondary"],
        accent: ["badge-accent"],
        neutral: ["badge-neutral"],
        base: ["base-100"],
        info: ["badge-info"],
        success: ["badge-success"],
        warning: ["badge-warning"],
        error: ["badge-error"],
      },
      outline: {
        true: ["badge-outline"],
      },
      size: {
        lg: ["badge-lg"],
        md: ["badge-md"],
        sm: ["badge-sm"],
        xs: ["badge-xs"],
      },
    },
    defaultVariants: {
      color: "base",
      outline: true,
      size: "xs",
    },
  });
  return <span class={badgeClass({ color })}>{children}</span>;
}
