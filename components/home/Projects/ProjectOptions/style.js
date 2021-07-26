import Icon from "@components/shared/Icon";
import styled from "styled-components";

export const ProjectOptionsContainer = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.general};
`;

export const ProjectLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8rem 1.2rem;
  background-color: inherit;

  &:hover {
    background-color: #cccc;
    transition: background-color 0.3s;
  }
`;
