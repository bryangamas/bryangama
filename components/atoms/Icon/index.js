import React from "react";
import StyledIcon from "./style";
import Link from "next/link";

const Icon = ({ src, href, onClick }) => {
  const body = <StyledIcon src={src} onClick={onClick} />;
  if (href) {
    return <Link to={href}>{body}</Link>;
  }
  return body;
};

export default Icon;
