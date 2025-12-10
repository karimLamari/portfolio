import { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageProvider.jsx";

const Approach = () => {
  const { t } = useContext(LanguageContext);
  const approach = t.approach;

  return (
    <section id="approach" className="py-20 px-4 rounded-t-3xl -mt-8 bg-background">
      <div className="container mx-auto max-w-6xl">

        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12">
          {approach.title}{" "}
          <span className="text-primary">{approach.titleHighlight}</span>
        </h2>

        <div className="mb-8 text-center">

          <p className="text-base md:text-lg text-muted">{approach.method}</p>
        </div>

        <div className="mb-8 text-center">
          <p className="text-base md:text-lg text-muted">{approach.value}</p>
        </div>

        <div className="text-center">
          <p className="text-base md:text-lg text-muted">{approach.vision}</p>
        </div>
      </div>
    </section>
  );
};

export default Approach;
