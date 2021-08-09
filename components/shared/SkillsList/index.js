import { IconWithCaption } from "@components/shared/Icon";
import { StyledSkillsList, SkillItem } from "./style";

const SkillsList = ({ skillsList, center, className }) => {
  return (
    <StyledSkillsList center={center} className={className}>
      {skillsList.map(({ name, icon, mask }) => {
        return (
          <SkillItem key={icon}>
            <IconWithCaption
              brighterIfDark
              src={`/icons/tools/${icon}.svg`}
              alt={name}
              mask={mask ? `/icons/tools/mask/${icon}.svg` : null}
              caption={name}
            />
          </SkillItem>
        );
      })}
    </StyledSkillsList>
  );
};

export default SkillsList;
