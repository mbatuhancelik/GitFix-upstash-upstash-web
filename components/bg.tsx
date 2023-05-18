import React, { HTMLProps } from "react";
import cx from "@/utils/cx";

export default function Bg({ className }: HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={cx(
        "absolute left-1/2 top-0 -z-10 -translate-x-1/2",
        "h-[400px] w-4/5",
        "bg-emerald-500 opacity-5 blur-[100px]",
        "pointer-events-none",
        className
      )}
    />
  );
}
