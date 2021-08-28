import { useState, useEffect } from 'react';
import Pixel from 'components/Pixel';
import styled from 'styled-components';

interface PixelCanvasProps {
  pixelArray: string[][];
  size: number;
  pixelQt: number;
}
export default function PixelCanvas({
  pixelArray,
  size,
  pixelQt,
}: PixelCanvasProps) {
  const pixel = pixelArray.map((pixel, index) => (
    <Pixel key={index} pixel={pixel} size={size} pixelQt={pixelQt} />
  ));
  return <Container size={size}>{pixel}</Container>;
}

interface StyleProps {
  size?: number;
}

const Container = styled.div<StyleProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;
