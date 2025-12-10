import { motion } from "framer-motion";

const ParcoursCard = ({ year, title, description, index }) => {
  const sideOffset = index % 2 === 0 ? -120 : 120;

  return (
    <motion.div
      className="w-3/4 max-w-xs m-5 text-xs md:text-sm  relative hover:scale-105 border border-dotted border-foreground hover:border-primary transition-transform duration-300"
      initial={{ x: sideOffset, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1,scale:1.2}}
      viewport={{ amount: 0.1 }}
      transition={{
        duration: 0.12,
        ease: "easeInOut",
      }}
    >
      <div className="p-4 rounded-md">
        <h3 className="font-bold text-muted text-lg">
          {year} {title}
        </h3>
        <p className="text-foreground">{description}</p>
      </div>
    </motion.div>
  );
};

export default ParcoursCard;
