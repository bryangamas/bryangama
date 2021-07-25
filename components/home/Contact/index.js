import Separator from "@components/shared/Separator";
import { SectionTitle } from "@components/shared/Title";
import FormField from "@components/shared/FormField";
import React from "react";
import {
  ContactIntroduction,
  ContactContainer,
  ContactContent,
  ContactForm,
  SendButton,
} from "./style";

const Contact = ({ contactData: t }) => {
  return (
    <ContactContainer>
      <SectionTitle>{t.title}</SectionTitle>
      <ContactContent>
        <ContactIntroduction>{t.introduction}</ContactIntroduction>
        <ContactForm>
          {Object.entries(t.fields).map(([key, field]) => {
            return <FormField key={key} field={{ ...field, id: key }} />;
          })}
          <SendButton>Enviar</SendButton>
        </ContactForm>
      </ContactContent>
      <Separator />
    </ContactContainer>
  );
};

export default Contact;
