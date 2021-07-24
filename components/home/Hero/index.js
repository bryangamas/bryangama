import React from "react";
import Paragraph from "@components/atoms/Paragraph";
import Image from "next/image";

import profilePhoto from "@public/imgs/profile.png";
import mainSkills from "@constants/mainTools.json";

import { Title, MainTitle, Subtitle } from "@components/atoms/Title";
import Icon from "@components/atoms/Icon";
import SocialMedia from "@components/SocialMedia";
import SkillsList from "@components/SkillsList";

import { HeroContainer, HeroContent, MainInfo, ProfilePhoto } from "./style";

const Hero = ({ heroData: t }) => {
  return (
    <HeroContainer center>
      <SocialMedia />
      <HeroContent>
        <MainInfo>
          <Title>{t.greetings}</Title>
          <MainTitle>{t.profileName}</MainTitle>
          <Subtitle>{t.role}</Subtitle>
          <Paragraph>{t.description}</Paragraph>
          <SkillsList center skillsList={mainSkills} />
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
      <Icon brightIfDark ratio={0.7} src="/icons/down.svg" href="#about" />
    </HeroContainer>
  );
};

export default Hero;
