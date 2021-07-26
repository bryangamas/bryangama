import React from "react";
import Separator from "@components/shared/Separator";
import ContactForm from "./ContactForm";
import { SectionTitle } from "@components/shared/Title";
import { ContactIntroduction, ContactContainer, ContactContent } from "./style";

const Contact = ({ contactData: t }) => {
  return (
    <ContactContainer>
      <SectionTitle>{t.title}</SectionTitle>
      <ContactContent>
        <ContactIntroduction>{t.introduction}</ContactIntroduction>
        <ContactForm
          fields={t.fields}
          sendMessage={t.send}
          requiredMessage={t.requiredMessage}
        />
      </ContactContent>
      <Separator />
    </ContactContainer>
  );
};

export default Contact;
