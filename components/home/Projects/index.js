import { SectionTitle } from "@components/atoms/Title";
import ProjectCard from "@components/ProjectCard";
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
