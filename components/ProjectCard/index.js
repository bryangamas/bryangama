import React from "react";
import Image from "next/image";
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
  console.log(`/imgs/projects/${p.slug}.png`);
  return (
    <StyledProjectCard>
      <ProjectPhoto>
        <Image
          src={`/imgs/projects/${p.slug}.png`}
          alt={p.title}
          width={960}
          height={512}
          layout="responsive"
        />
      </ProjectPhoto>
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
