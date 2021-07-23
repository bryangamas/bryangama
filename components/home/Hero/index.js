import React from "react";
import Paragraph from "@components/atoms/Paragraph";
import Image from "next/image";

import profilePhoto from "@public/imgs/profile.png";

import { Title, MainTitle, Subtitle } from "@components/atoms/Title";
import { HeroContainer, HeroContent, MainInfo, ProfilePhoto } from "./style";
import Icon from "@components/atoms/Icon";

const Hero = ({ heroData: t }) => {
  return (
    <HeroContainer center>
      <HeroContent>
        <MainInfo>
          <Title>{t.greetings}</Title>
          <MainTitle>{t.profileName}</MainTitle>
          <Subtitle>{t.role}</Subtitle>
          <Paragraph>{t.description}</Paragraph>
        </MainInfo>
        <ProfilePhoto>
          <Image
            src={profilePhoto}
            alt={t.profileName}
            placeholder="blur"
            layout="responsive"
          />
        </ProfilePhoto>
      </HeroContent>
      <Icon lightIfDark ratio={0.7} src="/icons/down.svg" />
    </HeroContainer>
  );
};

export default Hero;
