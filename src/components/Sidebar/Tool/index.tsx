import React, { useCallback } from 'react';
import styled from 'styled-components';
import PencilIcon from 'assets/icons/pencil_white_icon.png';
import EraserIcon from 'assets/icons/eraser_white_icon.png';
import DropperIcon from 'assets/icons/eyedropper_white_icon.png';

const TOOLS_DATA = [
  {
    id: 0,
    name: 'pencil',
    src: PencilIcon,
  },
  {
    id: 1,
    name: 'eraser',
    src: EraserIcon,
  },
  {
    id: 2,
    name: 'dropper',
    src: DropperIcon,
  },
];

interface ToolProps {
  selectedTool: string;
  setSelectedTool: React.Dispatch<React.SetStateAction<string>>;
}

export default function Tool({ selectedTool, setSelectedTool }: ToolProps) {
  const handleToolClick = useCallback(
    (toolName: string) => {
      setSelectedTool(toolName);
    },
    [setSelectedTool]
  );

  const tools = TOOLS_DATA.map((tool) => (
    <Button
      onClick={() => handleToolClick(tool.name)}
      key={tool.id}
      selected={selectedTool === tool.name}
    >
      <Icon src={tool.src} alt={tool.name} />
    </Button>
  ));

  return <Container>{tools}</Container>;
}

interface StyleProps {
  selected?: boolean;
}

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const Button = styled.button<StyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.selected && '#3182f6'};
`;

const Icon = styled.img`
  width: 35px;
  height: 35px;
`;
