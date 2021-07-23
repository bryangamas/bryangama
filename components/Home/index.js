import React from "react";
import Paragraph from "../atoms/Paragraph";
import { Title, MainTitle, Subtitle } from "../atoms/Title";
import { HomeContent, MainInfo, ProfilePhoto } from "./style";
import Image from "next/image";
import profilePhoto from "../../public/imgs/profile.png";
import Icon from "../atoms/Icon";

const Home = () => {
  return (
    <HomeContent center>
      <MainInfo>
        <Title>Hola, mi nombre es</Title>
        <MainTitle>Bryan Gama</MainTitle>
        <Subtitle>Desarrollador Full Stack</Subtitle>
        <Paragraph>
          Apasionado por la tecnología y por implementar soluciones y diseños
          increíbles usando:
        </Paragraph>
      </MainInfo>
      <ProfilePhoto>
        <Image
          src={profilePhoto}
          alt="Bryan Gama"
          placeholder="blur"
          layout="responsive"
        />
      </ProfilePhoto>
      <Icon src="/icons/down.svg" />
    </HomeContent>
  );
};

export default Home;
