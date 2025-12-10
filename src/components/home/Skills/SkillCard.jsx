import { motion } from 'framer-motion';

const SkillCard = ({ name, Icon, iconColor }) => {
  return (
    <motion.div className="flex flex-col items-center p-4 rounded-lg"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      
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
    </motion.div > 
  );
};

export default SkillCard;
