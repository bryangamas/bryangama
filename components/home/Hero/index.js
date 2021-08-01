import React from "react";
import Paragraph from "@components/shared/Paragraph";
import Image from "next/image";

import profilePhoto from "@public/imgs/profile.png";

import { IntroTitle, MainTitle, Subtitle } from "@components/shared/Title";
import Icon from "@components/shared/Icon";
import SocialMedia from "@components/layout/SocialMedia";
import SkillsList from "@components/shared/SkillsList";

import { HeroContainer, HeroContent, MainInfo, ProfilePhoto } from "./style";

const Hero = ({ heroData: t, mainTools }) => {
  return (
    <HeroContainer center>
      <SocialMedia />
      <HeroContent>
        <MainInfo>
          <MainTitle>
            <IntroTitle>{t.greetings}</IntroTitle>
            <br />
            {t.profileName}
          </MainTitle>
          <Subtitle>{t.role}</Subtitle>
          <Paragraph>{t.description}</Paragraph>
          <SkillsList center skillsList={mainTools} />
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
      <Icon
        alt={"Go to about"}
        brightIfDark
        ratio={0.7}
        src="/icons/down.svg"
        href="#about"
      />
    </HeroContainer>
  );
};

export default Hero;
