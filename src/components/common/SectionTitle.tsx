import { cn } from "@/lib/utils";
import { SectionTitleProps } from "@/types/SectionTitleProps";

export default function SectionTitle({
  highlightTitle,
  title,
  description,
  align = "left",
  variant = "light",
  className,
}: SectionTitleProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {highlightTitle && (
        <span
          className={cn(
            "mb-4 block text-base font-semibold leading-6 lg:text-[18px] lg:font-medium",
            isDark ? "text-white":"text-secondary",
          )}
        >
          {highlightTitle}
        </span>
      )}

      <h2
        className={cn(
          "text-[24px] lg:text-[30px] font-bold leading-8 lg:leading-10   ",
          isDark ? "text-white" : "text-primary",
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 lg:mt-6 text-sm lg:text-base leading-6 ",
            isDark ? "text-[#C4C4C4]" : "text-[#646363]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
