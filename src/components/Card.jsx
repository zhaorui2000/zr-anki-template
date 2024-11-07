import { cva } from "class-variance-authority";

export default function Card(props) {
  const { title, color, actions, children } = props;
  const cardClass = cva(["card", "shadow-xl"], {
    variants: {
      color: {
        primary: ["bg-primary", "text-primary-content"],
        secondary: ["bg-secondary", "text-secondary-content"],
        accent: ["bg-accent", "text-accent-content"],
        neutral: ["bg-neutral", "text-neutral-content"],
        base: ["base-100", "base-content"],
        info: ["bg-info", "text-info-content"],
        success: ["bg-success", "text-success-content"],
        warning: ["bg-warning", "text-warning-content"],
        error: ["bg-error", "text-error-content"],
      },
    },
    defaultVariants: {
      color: "base",
    },
  });
  return (
    <div class={cardClass({ color })}>
      <div class="card-body">
        {title && <h2 class="card-title">{title}</h2>}
        {children}
        <div class="card-actions justify-end">{actions}</div>
      </div>
    </div>
  );
}
