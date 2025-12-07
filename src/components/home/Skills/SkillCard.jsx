// eslint-disable-next-line no-unused-vars
const SkillCard = ({name, Icon, iconColor}) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg float">
      <Icon
        className={`
        bg-background
          w-20 h-20 md:w-24 md:h-24 ${iconColor}
          hover:scale-110
          transition-transform duration-300 rounded-full p-2
        `}
      />
      
      <span className="font-heading text-lg md:text-xl font-semibold text-center mt-3">
        {name}
      </span>
    </div>
  )
}

export default SkillCard;