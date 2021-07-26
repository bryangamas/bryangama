import Paragraph from "@components/shared/Paragraph";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 2rem 2.4rem;
  background: ${({ theme }) => theme.bg.secondary};
`;

export const FooterCredits = styled(Paragraph)``;
