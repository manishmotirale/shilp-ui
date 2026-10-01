import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Button20Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Button20({
  className,
  children = "Aurora Button",
  ...props
}: Button20Props) {
  return (
    <Button
      className={cn(
        "relative h-11 px-8",
        "bg-gradient-to-r from-green-400 via-cyan-500 to-blue-600",
        "text-white",
        "hover:shadow-2xl hover:shadow-cyan-500/50",
        "rounded-lg",
        "transition-all duration-300",
        "font-semibold",
        "overflow-hidden",
        "before:content-['']",
        "before:absolute",
        "before:top-0",
        "before:left-0",
        "before:w-full",
        "before:h-full",
        "before:bg-gradient-to-r",
        "before:from-white/0",
        "before:via-white/30",
        "before:to-white/0",
        "before:-translate-x-full",
        "hover:before:translate-x-full",
        "before:transition-transform",
        "before:duration-700",
        className,
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </Button>
  );
}