import { twMerge } from "tailwind-merge";

interface buttomProps {
  title: string;
  className?: string;
}

export function Buttom({ title, className }: buttomProps) {
  return (
    <button
      className={twMerge(
        " w-auto px-[16px] h-[38px] rounded-[4px] transition-all duration-300  text-slate-100 text-[12px]",
        className
      )}
    >
      {title}
    </button>
  );
}
