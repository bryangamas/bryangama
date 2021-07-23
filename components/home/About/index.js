import React from "react";
import { SectionTitle } from "@components/atoms/Title";
import { AboutContent, AboutMe, AboutSkills } from "./style";
import Paragraph from "@components/atoms/Paragraph";
import Separator from "@components/atoms/Separator";

const About = ({ aboutData: t }) => {
  let skillNumber = 1;
  return (
    <AboutContent secondary>
      <AboutMe>
        <SectionTitle>{t.title}</SectionTitle>
        <Separator />
        {t.aboutItems.map(({ icon, text }) => (
          <Paragraph key={skillNumber++} icon={`/icons/${icon}.svg`}>
            {text}
          </Paragraph>
        ))}
      </AboutMe>

      <AboutSkills>
        <SectionTitle>{t.skillsTitle}</SectionTitle>
        <Separator />
      </AboutSkills>
    </AboutContent>
  );
};

export default About;
