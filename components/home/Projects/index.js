import { SectionTitle } from "@components/shared/Title";
import ProjectCard from "@components/home/Projects/ProjectCard";
import { ProjectsContainer } from "./style";

const Projects = ({ projectsData: t }) => {
  const { projects } = t;
  return (
    <ProjectsContainer>
      <SectionTitle>{t.title}</SectionTitle>
      {projects.map((p) => {
        return <ProjectCard key={p.slug} project={p} labels={t.labels} />;
      })}
    </ProjectsContainer>
  );
};

export default Projects;
