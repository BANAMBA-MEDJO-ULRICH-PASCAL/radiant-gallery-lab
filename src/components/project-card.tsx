type ProjectCardProps = {
  title: string;
  blurb: string;
  tags: string[];
  image: string;
  category?: string;
};

export function ProjectCard({ title, blurb, tags, image, category }: ProjectCardProps) {
  return (
    <article className="group rounded-[28px] bg-cream/80 p-6 ring-1 ring-brown/10 backdrop-blur-sm transition-transform hover:-translate-y-1">
      <img
        src={image}
        alt={`${title} project preview`}
        loading="lazy"
        width={1024}
        height={768}
        className="mb-5 aspect-[4/3] w-full rounded-[20px] object-cover ring-1 ring-brown/5"
      />
      <div className="flex items-center gap-2">
        <h3 className="font-display text-xl text-brown">{title}</h3>
        {category && (
          <span className="rounded-full bg-sage/20 px-3 py-1 text-xs font-medium text-moss">
            {category}
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-bark text-pretty">{blurb}</p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-amber/20 px-3 py-1 text-xs font-medium text-brown"
          >
            {tag}
          </span>
        ))}
        <a
          href="#"
          className="ml-auto text-sm font-semibold text-terracotta transition-transform group-hover:-translate-x-0.5"
        >
          View case
        </a>
      </div>
    </article>
  );
}
