import React from "react";
import Paragraph from "@components/atoms/Paragraph";
import { Title, MainTitle, Subtitle } from "@components/atoms/Title";
import { HeroContent, MainInfo, ProfilePhoto } from "./style";
import Image from "next/image";
import profilePhoto from "@public/imgs/profile.png";
import Icon from "@components/atoms/Icon";

const Hero = ({ heroData: t }) => {
  return (
    <HeroContent center>
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
      <Icon lightIfDark ratio={0.7} src="/icons/down.svg" />
    </HeroContent>
  );
};

export default Hero;
