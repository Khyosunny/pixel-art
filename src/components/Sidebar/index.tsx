import React from 'react';
import styled from 'styled-components';
import { black } from 'styles/colors';
import Palette from 'components/Sidebar/Palette';
import Tool from 'components/Sidebar/Tool';
import { SaveButton } from 'components/Buttons';

interface SidebarProps {
  color: string;
  handleColorChange: (color: string) => void;
  selectedTool: string;
  setSelectedTool: React.Dispatch<React.SetStateAction<string>>;
  saveCanvasImg: () => void;
}

export default function Sidebar({
  color,
  handleColorChange,
  selectedTool,
  setSelectedTool,
  saveCanvasImg,
}: SidebarProps) {
  return (
    <Container>
      <Tool selectedTool={selectedTool} setSelectedTool={setSelectedTool} />
      <Palette color={color} handleColorChange={handleColorChange} />
      <SaveButton saveCanvasImg={saveCanvasImg} />
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
