import { useState } from 'react';
import styled from 'styled-components';
import PixelBox from 'components/PixelCanvas';
import { makePixelArray } from 'util/makePixelArray';

export default function App() {
  const SIZE = 500;
  const [pixelQt, setPixelQt] = useState(16);
  const [pixelArray, setPixelArray] = useState(makePixelArray(pixelQt));

  console.log('pixelArray: ', pixelArray);

  return (
    <Container>
      <Title>Pixel Art</Title>
      <PixelBox pixelArray={pixelArray} size={SIZE} pixelQt={pixelQt} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: #fff;
  margin: 50px 0;
`;
