import { SectionTitle } from "@components/shared/Title";
import ProjectCard from "@components/home/Projects/ProjectCard";
import React from "react";
import { ProjectsContainer } from "./style";

const Projects = ({ projectsData: t }) => {
  const { projects } = t;
  return (
    <ProjectsContainer>
      <SectionTitle>{t.title}</SectionTitle>
      {projects.map((p) => {
        return <ProjectCard key={p.slug} project={p} />;
      })}
    </ProjectsContainer>
  );
};

export default Projects;
