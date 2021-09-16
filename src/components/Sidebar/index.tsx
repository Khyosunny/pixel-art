import styled from 'styled-components';
import { black } from 'styles/colors';
import Palette from 'components/Palette';
import { SaveButton } from 'components/Buttons';

interface SidebarProps {
  color: string;
  handleColorChange: (color: string) => void;
}

export default function Sidebar({ color, handleColorChange }: SidebarProps) {
  return (
    <Container>
      <Palette color={color} handleColorChange={handleColorChange} />
      <SaveButton />
    </Container>
  );
}

const Container = styled.div`
  width: 280px;
  min-width: 280px;
  height: 100%;
  background-color: ${black[500]};
  display: flex;
  flex-direction: column;
`;
