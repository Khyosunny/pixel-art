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
  pixelQt: number;
  CANVAS_SIZE: number;
}

export default function Sidebar({
  color,
  handleColorChange,
  selectedTool,
  setSelectedTool,
  saveCanvasImg,
  pixelQt,
  CANVAS_SIZE,
}: SidebarProps) {
  return (
    <Container>
      <Tool selectedTool={selectedTool} setSelectedTool={setSelectedTool} />
      <Palette color={color} handleColorChange={handleColorChange} />
      <SaveButton saveCanvasImg={saveCanvasImg} />
      <Info>
        <InfoText>pixel: {pixelQt}</InfoText>
        <InfoText>
          canvas size: {CANVAS_SIZE}px X {CANVAS_SIZE}px
        </InfoText>
      </Info>
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

const Info = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  margin: 20px;
`;

const InfoText = styled.p`
  color: white;
`;
