import { IconWithCaption } from "@components/atoms/Icon";
import React from "react";
import { StyledSkillsList, SkillItem } from "./style";

const SkillsList = ({ skillsList }) => {
  return (
    <StyledSkillsList>
      {skillsList.map(({ name, icon, brightIfDark }) => {
        return (
          <SkillItem key={icon}>
            <IconWithCaption
              brighterIfDark
              src={`/icons/tools/${icon}.svg`}
              caption={name}
            />
          </SkillItem>
        );
      })}
    </StyledSkillsList>
  );
};

export default SkillsList;
