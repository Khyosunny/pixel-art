import { useState } from 'react';
import { createPixelArray } from 'util/createPixelArray';

interface returnType {
  pixelArray: string[][];
  setPixelArray: React.Dispatch<React.SetStateAction<string[][]>>;
}

export default function usePixel(pixelQt: number): returnType {
  const [pixelArray, setPixelArray] = useState<string[][]>(
    createPixelArray(pixelQt)
  );

  return { pixelArray, setPixelArray };
}
