import { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import Palette from 'components/Palette';
import useColor from 'hooks/useColor';
import PixelCanvas from 'components/PixelCanvas';

export default function App() {
  const [multiply, setMultiply] = useState(8);
  const [pixelQt, setPixelQt] = useState(37);
  const CANVAS_SIZE = useMemo(() => {
    let defaultSize = 560;
    if (defaultSize % pixelQt === 0) {
      return defaultSize;
    } else {
      defaultSize = Math.floor(defaultSize / pixelQt) * pixelQt;
      return defaultSize;
    }
  }, [pixelQt]);

  const PIXEL_SIZE = useMemo(
    () => CANVAS_SIZE / pixelQt,
    [CANVAS_SIZE, pixelQt]
  );
  console.log(Math.floor(CANVAS_SIZE / pixelQt), PIXEL_SIZE);
  const { color, handleColorChange } = useColor();

  return (
    <Container>
      <PixelCanvas
        color={color}
        PIXEL_SIZE={PIXEL_SIZE}
        CANVAS_SIZE={CANVAS_SIZE}
      />
      <Palette color={color} handleColorChange={handleColorChange} />
    </Container>
  );
}

const Container = styled.div`
  background-color: pink;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
