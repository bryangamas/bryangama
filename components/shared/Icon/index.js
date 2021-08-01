import React from "react";
import StyledIcon, {
  IconWithCaptionContainer,
  StyledIconWithCaption,
  IconCaption,
} from "./style";
import Link from "next/link";
import useDarkMode from "use-dark-mode";

const Icon = ({
  src,
  href,
  blank,
  onClick,
  brightIfDark,
  brigherIfDark,
  ratio,
  className,
  alt,
}) => {
  const { value: darkMode } = useDarkMode();
  const body = (
    <StyledIcon
      className={className}
      src={src}
      onClick={onClick}
      href={href}
      bright={brightIfDark && darkMode}
      brighter={brigherIfDark && darkMode}
      ratio={ratio}
      alt={alt}
    />
  );

  if (href) {
    return (
      <Link href={href}>
        <a
          aria-label={alt}
          rel={blank ? "noopener" : null}
          target={blank ? "_blank" : null}
        >
          {body}
        </a>
      </Link>
    );
  }
  return body;
};

export const IconWithCaption = (props) => {
  return (
    <IconWithCaptionContainer>
      <StyledIconWithCaption {...props} />
      <IconCaption>{props.caption}</IconCaption>
    </IconWithCaptionContainer>
  );
};

export default Icon;
