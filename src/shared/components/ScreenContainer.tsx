import React from "react";

export function ScreenContainer(props: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-950 text-white flex justify-center">
      <div className="w-full max-w-md px-4 pb-6 flex flex-col pt-2">
        {props.children}
      </div>
    </div>
  );
}

