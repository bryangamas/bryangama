import React from "react";
import StyledPageOptions from "./style";
import Icon from "../atoms/Icon";

const PageOptions = () => {
  return (
    <StyledPageOptions>
      <Icon src="/icons/pageOptions/en.svg" />
      <Icon src="/icons/pageOptions/darkMode.svg" />
    </StyledPageOptions>
  );
};

export default PageOptions;
