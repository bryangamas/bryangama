import React, { useEffect, useState } from "react";
import Separator from "@components/shared/Separator";
import ContactForm from "./ContactForm";
import { SectionTitle } from "@components/shared/Title";
import {
  ContactContainer,
  ContactContent,
  ContactIntroduction,
  SuccessMessage,
} from "./style";

const initialSucessState = {
  name: "",
  showSucessMessage: false,
};

const Contact = ({ contactData: t }) => {
  const [{ name, showSucessMessage }, setSucessOptions] =
    useState(initialSucessState);

  useEffect(() => {
    if (showSucessMessage) {
      setTimeout(() => setSucessOptions(initialSucessState), 6000);
    }
  }, [showSucessMessage]);

  return (
    <ContactContainer>
      <SectionTitle>{t.title}</SectionTitle>
      <ContactContent>
        <ContactIntroduction>{t.introduction}</ContactIntroduction>
        <ContactForm
          fields={t.fields}
          sendMessage={t.send}
          requiredMessage={t.requiredMessage}
          setSucessOptions={setSucessOptions}
        />
      </ContactContent>
      <SuccessMessage showSucessMessage={showSucessMessage}>
        {t.successMessage.replace("{NAME}", name ? name : "")}
      </SuccessMessage>
    </ContactContainer>
  );
};

export default Contact;
