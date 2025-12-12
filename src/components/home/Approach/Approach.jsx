import { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageProvider.jsx";

const Approach = () => {
  const { t } = useContext(LanguageContext);
  const approach = t.approach;

  return (
    <section id="approach" className=" min-h-screen snap-start py-20 px-4 rounded-t-3xl flex flex-col justify-center -mt-8">
      <div className="container mx-auto flex flex-col justify-center h-full">

        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12">
          {approach.title}{" "}
          <span className="text-primary">{approach.titleHighlight}</span>
        </h2>

        <div className="mb-8 text-center">

          <p className="text-base md:text-lg text-muted">{approach.paragraph1}</p>
        </div>

        <div className="mb-8 text-center">
          <p className="text-base md:text-lg text-muted">{approach.paragraph2}</p>
        </div>

        <div className="text-center">
          <p className="text-base md:text-lg text-muted">{approach.paragraph3}</p>
        </div>
      </div>
    </section>
  );
};

export default Approach;
