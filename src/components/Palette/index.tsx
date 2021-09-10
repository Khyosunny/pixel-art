// import { TwitterPicker, CompactPicker, HuePicker } from 'react-color';
import styled from 'styled-components';
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
      onClick={() => handleColorChange(pColor)}
    />
  ));

  return (
    <Container>
      <MenuTitle title="Palette" />
      <PickerContainer>{colors}</PickerContainer>
      {/* <HuePicker color={color} onChange={handleColorChange} /> */}
    </Container>
  );
}

interface StyleProps {
  pColor?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 285px;
  background-color: ${black[400]};
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
  border-left: 1px solid ${black[900]};
  border-bottom: 1px solid ${black[900]};
  background-color: ${(props) => props.pColor};
`;
