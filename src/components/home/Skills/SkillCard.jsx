const SkillCard = ({ name, Icon, iconColor }) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg float">
      <Icon
        className={`
          ${iconColor} 
          w-12 h-12 md:w-20 md:h-20 
          hover:scale-110 transition-transform duration-300 
          rounded-full p-2
        `}
      />
      <span className="font-heading text-sm md:text-xl font-semibold text-center mt-3">
        {name}
      </span>
    </div>
  );
};

export default SkillCard;
