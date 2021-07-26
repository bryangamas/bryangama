import React from "react";
import Link from "next/link";
import { NavigationItem } from "./style";

const Navigation = ({ className, navData, onClick }) => {
  return (
    <nav className={className}>
      <ul>
        {Object.entries(navData).map(([key, text]) => {
          const itemClass = key === "resume" ? "primary" : null;

          return (
            <NavigationItem className={itemClass} key={key}>
              <Link href={`#${key}`}>
                <a onClick={onClick}>{text}</a>
              </Link>
            </NavigationItem>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
