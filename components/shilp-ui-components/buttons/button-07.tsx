import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Button15Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Button15({
  className,
  children = "Glass Button",
  ...props
}: Button15Props) {
  return (
    <Button
      className={cn(
        "relative h-11 px-8",
        "bg-white/10 dark:bg-white/5",
        "text-white",
        "backdrop-blur-md",
        "border border-white/20",
        "hover:bg-white/20 dark:hover:bg-white/10",
        "hover:border-white/40",
        "rounded-lg",
        "transition-all duration-300",
        "font-semibold",
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}