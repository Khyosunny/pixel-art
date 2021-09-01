import styled from 'styled-components';
import { black } from 'styles/colors';
// import { SaveButton } from 'components/Buttons';

export default function Navbar() {
  return (
    <Container>
      <Nav>
        <Title>Pixel Art</Title>
        {/* <SaveButton /> */}
      </Nav>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${black[400]};
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #fff;
`;
