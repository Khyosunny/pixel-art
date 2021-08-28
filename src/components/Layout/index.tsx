import styled from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #272727;
`;
