import { useState } from 'react';
import styled from 'styled-components';
import PixelCanvas from 'components/PixelCanvas';
import { createPixelArray } from 'util/createPixelArray';

export default function App() {
  const SIZE = 500;
  const [pixelQt, setPixelQt] = useState(16);
  const [pixelArray, setPixelArray] = useState(createPixelArray(pixelQt));

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
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
`;
