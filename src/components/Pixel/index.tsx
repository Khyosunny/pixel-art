import styled from 'styled-components';

interface PixelProps {
  pixel: string[];
  size: number;
  pixelQt: number;
}

export default function Pixel({ pixel, size, pixelQt }: PixelProps) {
  const pixelItem = pixel.map((color, index) => (
    <PixelItem key={index} color={color} size={size / pixelQt} />
  ));
  return <Container>{pixelItem}</Container>;
}
interface styleProps {
  color?: string;
  size?: number;
  pixelQt?: number;
}

const Container = styled.div`
  display: flex;
`;

const PixelItem = styled.div<styleProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => props.color};
`;
