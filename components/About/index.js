import React from "react";
import { SectionTitle } from "../atoms/Title";
import { AboutContent, AboutMe, AboutSkills } from "./style";
import Paragraph from "../atoms/Paragraph";
import Separator from "../atoms/Separator";

const About = () => {
  return (
    <AboutContent secondary>
      <AboutMe>
        <SectionTitle>Sobre mí</SectionTitle>
        <Separator />
        <Paragraph icon="/icons/info/person.svg">
          Soy estudiante de Ingeniería de Sistemas y actualmente resido en Perú.
        </Paragraph>
        <Paragraph icon="/icons/info/tools.svg">
          Dentro de los stacks que manejo, me gusta trabajar principalmente con
          React, Node.js (con Express) y una de las tecnologías con las que más
          interactúo y creo que tiene mucho potencial: Next.js.
        </Paragraph>
        <Paragraph icon="/icons/info/computer.svg">
          Soy fiel creyente de que nunca paramos de aprender, por lo que siempre
          estoy probando nuevas tecnologías. Recientemente estuve probando
          Vue.js.
        </Paragraph>
      </AboutMe>

      <AboutSkills>
        <SectionTitle>Habilidades</SectionTitle>
        <Separator />
      </AboutSkills>
    </AboutContent>
  );
};

export default About;
