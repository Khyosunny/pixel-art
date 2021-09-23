// import { TwitterPicker, CompactPicker, HuePicker, PhotoshopPicker } from 'react-color';
import styled, { css } from 'styled-components';
import { black } from 'styles/colors';
import { PALETTE_COLOR_DATA } from 'constant/paletteColors';

interface PaletteProps {
  color: string;
  handleColorChange: (color: string) => void;
}

export default function Palette({ color, handleColorChange }: PaletteProps) {
  const colors = PALETTE_COLOR_DATA.map((pColor, index) => (
    <ColorRect
      key={index}
      pColor={pColor}
      selected={pColor === color}
      onClick={() => handleColorChange(pColor)}
    />
  ));

  return (
    <Container>
      <CurrentColor color={color}>
        <ColorText>{color}</ColorText>
      </CurrentColor>
      <PickerContainer>{colors}</PickerContainer>
    </Container>
  );
}

interface StyleProps {
  color?: string;
  pColor?: string;
  selected?: boolean;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${black[600]};
  padding: 5px 0;
`;

const CurrentColor = styled.div<StyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.color};
`;

const ColorText = styled.p`
  color: white;
  font-weight: 600;
  font-size: 24px;
  text-shadow: -1px 0 ${black[400]}, 0 1px ${black[400]}, 1px 0 ${black[400]},
    0 -1px ${black[400]};
`;

const PickerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 150px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
    border: 1px solid black;
    background-color: ${black[400]};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${black[200]};
    border: 2px solid ${black[400]};
    border-radius: 10px;
  }
`;

const ColorRect = styled.div<StyleProps>`
  width: 30px;
  height: 30px;
  border: 1px solid ${black[600]};
  background-color: ${(props) => props.pColor};
  position: relative;

  ${(props) =>
    props.selected &&
    css`
      &::after {
        content: '';
        overflow: hidden;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 18px;
        height: 18px;
        border: 4px solid white;
      }

      &::before {
        content: '';
        overflow: hidden;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 26px;
        height: 26px;
        border: 2px solid ${black[600]};
      }
    `}

  &:hover {
    &::after {
      content: '';
      overflow: hidden;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 18px;
      height: 18px;
      border: 4px solid white;
    }

    &::before {
      content: '';
      overflow: hidden;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 26px;
      height: 26px;
      border: 2px solid ${black[600]};
    }
  }
`;
