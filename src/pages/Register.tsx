import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/layout/Container";
import { FiUser, FiMail, FiLock, FiArrowRight } from "react-icons/fi";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Wrapper = styled.div`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
`;

const Card = styled.div`
  width: 100%;
  max-width: 420px;
  background: ${({ theme }) => theme.colors.surface};
  backdrop-filter: blur(16px);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 28px;
  padding: 2.5rem;
  box-shadow: ${({ theme }) => theme.shadows.glass};
  animation: ${fadeUp} 0.6s ease-out;

  @media (max-width: 480px) {
    padding: 1.75rem 1.25rem;
    border-radius: 20px;
  }
`;

const LogoMark = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 18px;
  background: ${({ theme }) => theme.gradients.accent};
  color: #fff;
  font-family: "JetBrains Mono", monospace;
  font-weight: 800;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0.5rem;
  box-shadow: ${({ theme }) => theme.shadows.glow};
`;

const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.4rem;
  text-align: center;
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  text-align: center;
  margin: 0 0 0.5rem;
  font-size: 0.92rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
`;

const InputGroup = styled.div`
  position: relative;
`;

const InputIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.muted};
  display: flex;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem 0.8rem 2.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px; /* Prevents auto zoom on mobile */
  outline: none;
  transition: border-color 0.25s, box-shadow 0.25s;
  box-sizing: border-box;

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}18,
                ${({ theme }) => theme.shadows.glow};
  }

  @media (min-width: 769px) {
    font-size: 0.92rem;
  }
`;

const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0.85rem;
  border: none;
  border-radius: 50px;
  background: ${({ theme }) => theme.gradients.accent};
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s;
  margin-top: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.glowStrong};
  }
`;

const BottomText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.88rem;
  margin: 1.5rem 0 0;

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // TODO: Connect to Go backend register endpoint
    console.log("Register attempt:", { name, email, password });
    alert(
      "Registration will be connected once the Go backend is ready!",
    );
  };

  return (
    <Container>
      <Wrapper>
        <Card>
          <LogoMark>A</LogoMark>
          <Title>Create Account</Title>
          <Subtitle>Join the community</Subtitle>
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <InputIcon>
                <FiUser size={16} />
              </InputIcon>
              <Input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </InputGroup>
            <InputGroup>
              <InputIcon>
                <FiMail size={16} />
              </InputIcon>
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputGroup>
            <InputGroup>
              <InputIcon>
                <FiLock size={16} />
              </InputIcon>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </InputGroup>
            <InputGroup>
              <InputIcon>
                <FiLock size={16} />
              </InputIcon>
              <Input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
              />
            </InputGroup>
            <SubmitBtn type="submit">
              Create Account <FiArrowRight size={16} />
            </SubmitBtn>
          </Form>
          <BottomText>
            Already have an account? <Link to="/login">Sign in</Link>
          </BottomText>
        </Card>
      </Wrapper>
    </Container>
  );
};
