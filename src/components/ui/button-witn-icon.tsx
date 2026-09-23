import * as React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonWithIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  href?: string;
  sizeVariant?: "default" | "sm";
}

export const ButtonWithIcon = ({
  className,
  children,
  text,
  href,
  sizeVariant = "sm",
  ...props
}: ButtonWithIconProps) => {
  const content = text || children || "Register Now";

  // If sizeVariant is "sm", scale gracefully for compact headers (h-10)
  const isSm = sizeVariant === "sm";

  const buttonClasses = isSm
    ? cn(
        "relative text-sm font-medium rounded-full h-12 p-1 ps-8 pe-16 group transition-all duration-500 hover:ps-16 hover:pe-8 w-fit overflow-hidden cursor-pointer bg-primary text-primary-foreground hover:bg-[#6d28d9] hover:shadow-[0_0_20px_rgba(124,58,237,0.35)]",
        className
      )
    : cn(
        "relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer bg-primary text-primary-foreground hover:bg-[#6d28d9] hover:shadow-[0_0_20px_rgba(124,58,237,0.35)]",
        className
      );

  const circleClasses = isSm
    ? "absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45 shadow-sm"
    : "absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45 shadow-sm";

  if (href) {
    return (
      <Button asChild className={buttonClasses}>
        <a href={href} className="no-underline">
          <span className="relative z-10 transition-all duration-500 tracking-wide">
            {content}
          </span>
          <div className={circleClasses}>
            <ArrowUpRight size={isSm ? 15 : 16} />
          </div>
        </a>
      </Button>
    );
  }

  return (
    <Button className={buttonClasses} {...props}>
      <span className="relative z-10 transition-all duration-500 tracking-wide">
        {content}
      </span>
      <div className={circleClasses}>
        <ArrowUpRight size={isSm ? 15 : 16} />
      </div>
    </Button>
  );
};

const ButtonWithIconDemo = () => {
  return (
    <Button className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer">
      <span className="relative z-10 transition-all duration-500">
        Registor Now
      </span>
      <div className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
        <ArrowUpRight size={16} />
      </div>
    </Button>
  );
};

export default ButtonWithIconDemo;
