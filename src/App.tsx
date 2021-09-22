import { useState, useMemo } from 'react';
import styled from 'styled-components';
import useColor from 'hooks/useColor';
import PixelCanvas from 'components/PixelCanvas';
import Sidebar from 'components/Sidebar';

export default function App() {
  const [selectedTool, setSelectedTool] = useState('pencil');
  const [pixelQt, setPixelQt] = useState(32);
  const CANVAS_SIZE = useMemo(() => {
    let defaultSize = 560;
    if (pixelQt <= 64) {
      if (defaultSize % pixelQt === 0) {
        return defaultSize;
      } else {
        defaultSize = Math.floor(defaultSize / pixelQt) * pixelQt;
        return defaultSize;
      }
    }
    return defaultSize;
  }, [pixelQt]);

  const PIXEL_SIZE = useMemo(
    () => CANVAS_SIZE / pixelQt,
    [CANVAS_SIZE, pixelQt]
  );
  console.log(Math.floor(CANVAS_SIZE / pixelQt), PIXEL_SIZE);
  const { color, handleColorChange } = useColor();

  return (
    <Container>
      <CanvasContainer>
        <PixelCanvas
          color={color}
          handleColorChange={handleColorChange}
          PIXEL_SIZE={PIXEL_SIZE}
          CANVAS_SIZE={CANVAS_SIZE}
          selectedTool={selectedTool}
        />
      </CanvasContainer>
      <Sidebar
        color={color}
        handleColorChange={handleColorChange}
        selectedTool={selectedTool}
        setSelectedTool={setSelectedTool}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
