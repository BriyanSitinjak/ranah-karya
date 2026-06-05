import type { SectionHeadingContent } from "@/types";

type SectionHeadingProps = SectionHeadingContent & {
  titleAs?: "h1" | "h2" | "h3";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  titleAs: TitleTag = "h2",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <span className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
        {eyebrow}
      </span>
      <TitleTag className="text-2xl font-bold tracking-tight text-brand-dark md:text-3xl">
        {title}
      </TitleTag>
      {description && (
        <p className="mt-3 max-w-lg text-sm text-brand-gray-dark md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
