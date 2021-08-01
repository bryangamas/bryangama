import Icon from "@components/shared/Icon";
import Link from "next/link";
import React from "react";
import { ProjectOptionsContainer, ProjectLink } from "./style";

const ProjectOptions = ({ links, labels }) => {
  return (
    <ProjectOptionsContainer>
      {Object.entries(links).map(([key, link]) => {
        return (
          <Link key={key} href={link}>
            <a rel="noopener" target={"_blank"}>
              <ProjectLink>
                <Icon
                  alt={labels[key]}
                  src={`/icons/projectOptions/${key}.svg`}
                />
                {labels[key]}
              </ProjectLink>
            </a>
          </Link>
        );
      })}
    </ProjectOptionsContainer>
  );
};

export default ProjectOptions;
