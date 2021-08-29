import Navbar from 'components/Navbar';
import { black } from 'styles/colors';
import styled from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Navbar />
      <Content>{children}</Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${black[600]};
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;
