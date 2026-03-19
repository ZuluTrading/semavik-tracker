import React from "react";

export function Card(props: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`card-elevated px-5 py-4 ${props.className ?? ""}`}>
      {props.children}
    </section>
  );
}

