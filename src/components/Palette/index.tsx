// import { TwitterPicker, CompactPicker, HuePicker, PhotoshopPicker } from 'react-color';
import styled, { css } from 'styled-components';
import { black } from 'styles/colors';
import MenuTitle from 'components/MenuTitle';

interface PaletteProps {
  color: string;
  handleColorChange: (color: string) => void;
}

const COLOR_PALETTE_DATA = [
  '#000000',
  '#4D4D4D',
  '#808080',
  '#999999',
  '#CCCCCC',
  '#FFFFFF',
  '#B71C1C',
  '#C72F2F',
  '#F44336',
  '#FF44B1',
  '#FF79A7',
  '#F47373',
  '#F49773',
  '#FFE0B2',
  '#FFB74D',
  '#FF9800',
  '#F57C00',
  '#E65100',
  '#FFF9C4',
  '#FFF176',
  '#FCDC00',
  '#FBC02D',
  '#DCEDC8',
  '#AED581',
  '#8BC34A',
  '#689F38',
  '#33691E',
  '#C8E6C9',
  '#81C784',
  '#4CAF50',
  '#388E3C',
  '#194D33',
  '#F0F4C3',
  '#DCE775',
  '#CDDC39',
  '#AFB42B',
  '#827717',
  '#B2DFDB',
  '#4DB6AC',
  '#009688',
  '#00796B',
  '#004D40',
  '#ABF7FF',
  '#4CEEFF',
  '#00BCD4',
  '#03A9F4',
  '#7687E5',
  '#5268E1',
  '#3F51B5',
  '#25348A',
  '#21284D',
  '#E1BEE7',
  '#D69BDD',
  '#BA68C8',
  '#DC3AF8',
  '#9C27B0',
  '#6C3772',
  '#48214D',
  '#D7CCC8',
  '#997C71',
  '#795548',
  '#5D4037',
  '#3E2723',
  '#CFD8DC',
  '#90A4AE',
  '#607D8B',
  '#455A64',
  '#263238',
];

export default function Palette({ color, handleColorChange }: PaletteProps) {
  const colors = COLOR_PALETTE_DATA.map((pColor, index) => (
    <ColorRect
      key={index}
      pColor={pColor}
      selected={pColor === color}
      onClick={() => handleColorChange(pColor)}
    />
  ));

  return (
    <Container>
      {/* <MenuTitle title="Palette" /> */}
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  background-color: ${black[400]};
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
  color: #fff;
  font-weight: 600;
  font-size: 24px;
  text-shadow: -1px 0 ${black[400]}, 0 1px ${black[400]}, 1px 0 ${black[400]},
    0 -1px ${black[400]};
`;

const PickerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 280px;
  height: 150px;
  overflow-y: scroll;
  background-color: ${black[400]};

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
        border: 4px solid #fff;
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
      border: 4px solid #fff;
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
