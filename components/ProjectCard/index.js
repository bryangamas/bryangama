import React from "react";
import {
  FeatureItem,
  FeatureList,
  ProjectDescription,
  ProjectInfo,
  ProjectPhoto,
  ProjectTitle,
  StyledProjectCard,
  ToolItem,
  ToolList,
} from "./style";

const ProjectCard = ({ project: p }) => {
  console.log({ p });
  return (
    <StyledProjectCard>
      <ProjectPhoto src={`/imgs/projects/${p.slug}.png`} />
      <ProjectInfo>
        <ProjectTitle>{p.title}</ProjectTitle>
        <ProjectDescription>{p.description}</ProjectDescription>
        <FeatureList>
          {p.features.map((feature, i) => {
            return <FeatureItem key={i}>{feature}</FeatureItem>;
          })}
        </FeatureList>
        <ToolList>
          {p.tools.map((tool, i) => {
            return <ToolItem key={i}>{tool}</ToolItem>;
          })}
        </ToolList>
      </ProjectInfo>
    </StyledProjectCard>
  );
};

export default ProjectCard;
