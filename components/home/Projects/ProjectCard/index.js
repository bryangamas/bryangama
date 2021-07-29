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
import ProjectOptions from "../ProjectOptions";
import { shimmer, toBase64 } from "utils/shimmer";

const ProjectCard = ({ project: p, labels }) => {
  return (
    <StyledProjectCard>
      <ProjectPhoto>
        <Image
          src={`/imgs/projects/${p.slug}.png`}
          alt={p.title}
          width={960}
          height={512}
          layout="responsive"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(960, 512)
          )}`}
        />
        <ProjectOptions links={p.links} labels={labels} />
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
