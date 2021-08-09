import { SectionTitle } from "@components/shared/Title";
import { AboutContent, AboutMe, AboutSkills, FullSkillsList } from "./style";
import Paragraph from "@components/shared/Paragraph";
import Separator from "@components/shared/Separator";

const About = ({ aboutData: t, fullTools }) => {
  let skillNumber = 1;
  return (
    <AboutContent secondary>
      <AboutMe>
        <SectionTitle>{t.title}</SectionTitle>
        <Separator />
        {t.aboutItems.map(({ icon, text }) => (
          <Paragraph key={skillNumber++} icon={`/icons/${icon}.svg`} alt={icon}>
            {text}
          </Paragraph>
        ))}
      </AboutMe>

      <Separator />

      <AboutSkills>
        <SectionTitle>{t.skillsTitle}</SectionTitle>
        <Separator />
        <FullSkillsList skillsList={fullTools} />
      </AboutSkills>
    </AboutContent>
  );
};

export default About;
