import React from "react";

export function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
  }
) {
  const variant = props.variant ?? "primary";
  const className = [
    "inline-flex items-center justify-center rounded-2xl font-semibold transition active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand focus-visible:ring-offset-black",
    props.disabled ? "opacity-60" : "",
    variant === "primary"
      ? "btn-primary px-5 py-4"
      : "bg-slate-800/70 text-slate-100 border border-slate-700 hover:bg-slate-700 px-4 py-3",
    props.className ?? ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button {...props} className={className}>
      {props.children}
    </button>
  );
}

