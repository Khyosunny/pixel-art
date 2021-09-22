import { useState, useRef, useCallback } from 'react';
import { rgbToHex } from 'util/rgbToHex';

export default function usePixel(
  color: string,
  PIXEL_SIZE: number,
  selectedTool: string,
  handleColorChange: (color: string) => void
) {
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
        if (selectedTool === 'pencil') {
          context.fillStyle = color;
          context.fillRect(x, y, PIXEL_SIZE, PIXEL_SIZE);
        } else if (selectedTool === 'eraser') {
          context.clearRect(x, y, PIXEL_SIZE, PIXEL_SIZE);
        } else if (selectedTool === 'dropper') {
          const rgb = context.getImageData(x, y, 1, 1).data;
          const hex =
            '#' + ('000000' + rgbToHex(rgb[0], rgb[1], rgb[2])).slice(-6);
          console.log('hex', hex);
          handleColorChange(hex);
        }
      }
    },
    [color, PIXEL_SIZE, selectedTool, handleColorChange]
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
