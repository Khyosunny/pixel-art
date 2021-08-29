import { useState } from 'react';
import styled from 'styled-components';
import PixelCanvas from 'components/PixelCanvas';
import usePixel from 'hooks/usePixel';

export default function App() {
  const SIZE = 500;
  const [pixelQt, setPixelQt] = useState(16);
  const { pixelArray, setPixelArray } = usePixel(pixelQt);

  console.log('pixelArray: ', pixelArray);

  return (
    <Container>
      <PixelCanvas pixelArray={pixelArray} size={SIZE} pixelQt={pixelQt} />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
