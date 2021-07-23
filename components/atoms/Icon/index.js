import React from "react";
import StyledIcon from "./style";
import Link from "next/link";
import useDarkMode from "use-dark-mode";

const Icon = ({ src, href, onClick, brightIfDark, brigherIfDark, ratio }) => {
  const { value: darkMode } = useDarkMode();
  const body = (
    <StyledIcon
      src={src}
      onClick={onClick}
      bright={brightIfDark && darkMode}
      brighter={brigherIfDark && darkMode}
      ratio={ratio}
    />
  );

  if (href) {
    return (
      <Link href={href}>
        <a rel="noopener" target="_blank">
          {body}
        </a>
      </Link>
    );
  }
  return body;
};

export default Icon;
