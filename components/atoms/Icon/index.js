import React from "react";
import StyledIcon from "./style";
import Link from "next/link";

const Icon = ({ src, href }) => {
  const body = <StyledIcon src={src} />;
  if (href) {
    return <Link to={href}>{body}</Link>;
  }
  return body;
};

export default Icon;
