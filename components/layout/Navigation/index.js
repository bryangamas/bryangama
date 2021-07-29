import React from "react";
import Link from "next/link";
import { NavigationItem } from "./style";
import useLocale from "hooks/useLocale";

const Navigation = ({ className, navData, onClick }) => {
  const { locale } = useLocale();

  const resumeLink = `/me/resume${locale === "es" ? "-es" : ""}.pdf`;

  return (
    <nav className={className}>
      <ul>
        {Object.entries(navData).map(([key, text]) => {
          const resumeButton = key === "resume";

          return (
            <NavigationItem
              className={resumeButton ? "primary" : "underline"}
              key={key}
            >
              <Link href={resumeButton ? resumeLink : `#${key}`}>
                <a
                  target={resumeButton ? "_blank" : null}
                  rel={resumeButton ? "noopener" : null}
                  onClick={onClick}
                >
                  {text}
                </a>
              </Link>
            </NavigationItem>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
