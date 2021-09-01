import { useEffect } from 'react';
import usePixel from 'hooks/usePixel';
import styled from 'styled-components';

interface PixelCanvasProps {
  color: string;
  PIXEL_SIZE: number;
  CANVAS_SIZE: number;
}
export default function PixelCanvas({
  color,
  PIXEL_SIZE,
  CANVAS_SIZE,
}: PixelCanvasProps) {
  const { canvasRef, startDrawing, drawing, clickDrawing, exitDrawing } =
    usePixel(color, PIXEL_SIZE);

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
    <Canvas
      ref={canvasRef}
      PIXEL_SIZE={PIXEL_SIZE}
      width={CANVAS_SIZE}
      height={CANVAS_SIZE}
    />
  );
}

interface StyleProps {
  PIXEL_SIZE?: number;
}

const Canvas = styled.canvas<StyleProps>`
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
  background-position: ${(props) =>
    `0 0, ${props.PIXEL_SIZE}px ${props.PIXEL_SIZE}px`};
`;
