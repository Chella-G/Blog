import styled from "styled-components";
import { ReactNode } from "react";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => (
  <Wrapper className={className}>{children}</Wrapper>
);
