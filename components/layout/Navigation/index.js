import React from "react";
import Link from "next/link";
import { NavigationItem } from "./style";

const resumeLink = "/resume";

const Navigation = ({ className, navData, onClick }) => {
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
                <a target={resumeButton ? "_blank" : null} onClick={onClick}>
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
