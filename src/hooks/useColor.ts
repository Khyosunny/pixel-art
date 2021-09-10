import { useState, useCallback } from 'react';
import { ColorResult } from 'react-color';

export default function useColor() {
  const [color, setColor] = useState('#000');

  const handleColorChange = useCallback((color: string) => {
    setColor(color);
  }, []);

  return { color, handleColorChange };
}
