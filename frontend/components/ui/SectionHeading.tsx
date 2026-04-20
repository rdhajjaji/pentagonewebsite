type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className={`eyebrow ${centered ? "justify-center" : ""}`}>{eyebrow}</p> : null}
      <h2 className="mt-4 text-balance text-3xl font-black tracking-[-0.03em] text-slate-950 md:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
