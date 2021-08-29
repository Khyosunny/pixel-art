import { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import Palette from 'components/Palette';
import useColor from 'hooks/useColor';
import usePixel from 'hooks/usePixel';

export default function App() {
  const [pixelQt, setPixelQt] = useState(16);
  const CANVAS_SIZE = useMemo(() => 560, []);
  const PIXEL_SIZE = useMemo(
    () => CANVAS_SIZE / pixelQt,
    [CANVAS_SIZE, pixelQt]
  );
  console.log(Math.floor(CANVAS_SIZE / pixelQt), PIXEL_SIZE);
  const { color, handleColorChange } = useColor();
  const { canvasRef, startDrawing, drawing, clickDrawing, exitDrawing } =
    usePixel(color, PIXEL_SIZE);

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

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', drawing);
    canvas.addEventListener('click', clickDrawing);
    canvas.addEventListener('mouseup', exitDrawing);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', drawing);
      canvas.removeEventListener('click', clickDrawing);
      canvas.removeEventListener('mouseup', exitDrawing);
    };
  }, [canvasRef, startDrawing, drawing, exitDrawing, clickDrawing]);

  return (
    <Container>
      <canvas ref={canvasRef} width={CANVAS_SIZE} height={CANVAS_SIZE} />
      <Palette color={color} handleColorChange={handleColorChange} />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  canvas {
    background-color: #eee;
    background-image: linear-gradient(
        45deg,
        #ddd 25%,
        transparent 25%,
        transparent 75%,
        #ddd 75%,
        #ddd
      ),
      linear-gradient(
        45deg,
        #ddd 25%,
        transparent 25%,
        transparent 75%,
        #ddd 75%,
        #ddd
      );
    background-size: 70px 70px;
    background-position: 0 0, 35px 35px;
  }
`;
