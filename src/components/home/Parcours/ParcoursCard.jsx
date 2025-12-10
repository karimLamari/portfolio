const ParcoursCard = ({ year, title, description, type }) => {
  

  return (
    <div className="w-md m-5  text-sm relative hover:scale-105 border border-foreground hover:border-primary transition-transform duration-300 " >
      <div className="p-4 rounded-md">
        <h3 className="font-bold text-muted text-lg">{year}  {title}</h3>
        <p className="text-foreground">{description}</p>
      </div>
    </div>
  );
};
export default ParcoursCard;