import { useState, useRef, useCallback } from 'react';

export default function usePixel(color: string, PIXEL_SIZE: number) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const getMousePosition = useCallback(
    (e) => {
      let x = Math.floor(e.offsetX / PIXEL_SIZE) * PIXEL_SIZE;
      let y = Math.floor(e.offsetY / PIXEL_SIZE) * PIXEL_SIZE;

      return {
        x,
        y,
      };
    },
    [PIXEL_SIZE]
  );

  const drawPixel = useCallback(
    (x, y) => {
      if (!canvasRef.current) {
        return;
      }
      const canvas: HTMLCanvasElement = canvasRef.current;
      const context = canvas.getContext('2d');
      if (context) {
        context.fillStyle = color;
        // context.lineWidth = 1;
        // context.strokeStyle = '#272727';
        context.fillRect(x, y, PIXEL_SIZE, PIXEL_SIZE);
        console.log(context.getImageData(x, y, 1, 1).data);
        // context.fillRect(x + 1, y + 1, PIXEL_SIZE - 2, PIXEL_SIZE - 2);
      }
    },
    [color, PIXEL_SIZE]
  );

  const startDrawing = useCallback(
    (e) => {
      const position = getMousePosition(e);
      if (position) {
        console.log('start', position);
        setIsDrawing(true);
      }
    },
    [getMousePosition]
  );

  const drawing = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isDrawing) {
        const position = getMousePosition(e);
        if (position) {
          drawPixel(position.x, position.y);
        }
      }
    },
    [isDrawing, drawPixel, getMousePosition]
  );

  const clickDrawing = useCallback(
    (e) => {
      const position = getMousePosition(e);
      if (position) {
        drawPixel(position.x, position.y);
      }
    },
    [getMousePosition, drawPixel]
  );

  const exitDrawing = useCallback(() => {
    setIsDrawing(false);
  }, []);

  return {
    canvasRef,
    startDrawing,
    drawing,
    clickDrawing,
    exitDrawing,
  };
}
