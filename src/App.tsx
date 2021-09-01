import { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import Palette from 'components/Palette';
import useColor from 'hooks/useColor';
import PixelCanvas from 'components/PixelCanvas';

export default function App() {
  const [pixelQt, setPixelQt] = useState(16);
  const CANVAS_SIZE = useMemo(() => 560, []);
  const PIXEL_SIZE = useMemo(
    () => CANVAS_SIZE / pixelQt,
    [CANVAS_SIZE, pixelQt]
  );
  console.log(Math.floor(CANVAS_SIZE / pixelQt), PIXEL_SIZE);
  const { color, handleColorChange } = useColor();

  // 그리드
  // useEffect(() => {
  //   if (!canvasRef.current) {
  //     return;
  //   }
  //   const canvas: HTMLCanvasElement = canvasRef.current;
  //   const context = canvas.getContext('2d');
  //   if (context) {
  //     context.lineWidth = 1;
  //     context.strokeStyle = '#272727';
  //     for (let x = 0; x < PIXEL_SIZE; x++) {
  //       for (let y = 0; y < PIXEL_SIZE; y++) {
  //         context.strokeRect(
  //           PIXEL_SIZE * x,
  //           PIXEL_SIZE * y,
  //           PIXEL_SIZE,
  //           PIXEL_SIZE
  //         );
  //       }
  //     }
  //   }
  // }, [canvasRef, PIXEL_SIZE]);

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
