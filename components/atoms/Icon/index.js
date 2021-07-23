import React from "react";
import StyledIcon from "./style";
import Link from "next/link";
import useDarkMode from "use-dark-mode";

const Icon = ({ src, href, onClick, lightIfDark, ratio }) => {
  const { value: darkMode } = useDarkMode();

  const body = (
    <StyledIcon
      src={src}
      onClick={onClick}
      lightIfDark={lightIfDark}
      light={lightIfDark && darkMode}
      ratio={ratio}
    />
  );
  if (href) {
    return <Link to={href}>{body}</Link>;
  }
  return body;
};

export default Icon;
