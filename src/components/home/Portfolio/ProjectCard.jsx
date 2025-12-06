

function ProjectCard({ title, description, image, tags, link })   {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="group block text-center">
      <div className="relative w-60 aspect-9/16 mx-auto mb-6  rounded-2xl">
        <img
          src={image}
          alt={title}
          className="object-contain"
        />
        <div
          className="absolute bg-black/80 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-4xl"
          style={{ top: '1%', bottom: '1%', left: '5%', right: '1%' }}
        >
          <p className="text-white text-sm leading-relaxed">{description}</p>
        </div>
      </div>
      <h3 className="font-heading text-xl font-semibold mb-2">{title}</h3>
      <div className="flex flex-wrap justify-center gap-2 max-w-40 mx-auto">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs border border-bg-background-1 px-3 py-1 bg-background text-foreground rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
export default ProjectCard;