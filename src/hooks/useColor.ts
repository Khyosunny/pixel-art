import { useState, useCallback } from 'react';

export default function useColor() {
  const [color, setColor] = useState('#000000');

  const handleColorChange = useCallback((color: string) => {
    setColor(color);
  }, []);

  return { color, handleColorChange };
}
