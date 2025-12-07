

const MOdalProject = ({ isOpen, project, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-background/80 flex items-center justify-center z-50"
      onClick={onClose}
    >

      <div
        className="bg-background border border-bg-foreground p-6 rounded-xl max-w-lg w-full m-4 relative  slide-up justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-white  text-2xl font-bold"
          onClick={onClose}
        >
          X
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center text-muted">{project.title}</h2>

        <p className="mb-4 text-center">{project.fullDescription}</p>
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs border border-bg-background-1 px-3 py-1 bg-background text-foreground rounded-full "
            >
              {tag}
            </span>
          ))}
        </div>


        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className=" px-4 py-2 rounded text-center mx-auto block"
        >
          Visit Project
        </a>
      </div>
    </div>
  );
};

export default MOdalProject;
