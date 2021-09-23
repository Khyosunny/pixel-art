import { useState, useCallback } from 'react';
import styled from 'styled-components';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons//ArrowDropUp';
import { PIXEL_DATA } from 'constant/pixel';
import { black } from 'styles/colors';

interface SelectProps {
  pixelQt: number;
  handlePixelChange: (pixel: number) => void;
}

export default function Select({ pixelQt, handlePixelChange }: SelectProps) {
  const [selectOpen, setSelectOpen] = useState(false);

  const handleSelectBoxToggle = useCallback(() => {
    setSelectOpen((prev) => !prev);
  }, []);

  const handlePixelChangeAndSelectBoxClose = useCallback(
    (pixel: number) => {
      handlePixelChange(pixel);
      setSelectOpen(false);
    },
    [handlePixelChange]
  );

  const pixels = PIXEL_DATA.map((item) => (
    <Item
      key={item.id}
      onClick={() => handlePixelChangeAndSelectBoxClose(item.pixel)}
    >
      {item.itemName}
    </Item>
  ));

  const currentPixel = PIXEL_DATA.find((item) => pixelQt === item.pixel);
  return (
    <Container>
      <SelectBox onClick={handleSelectBoxToggle}>
        {currentPixel?.itemName}
        {selectOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </SelectBox>
      {selectOpen && <ItemBox>{pixels}</ItemBox>}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const SelectBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 14px;
  cursor: pointer;
  color: white;
  font-size: 18px;
  background-color: ${black[600]};

  svg {
    fill: white;
  }
`;

const ItemBox = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 10;
  z-index: 50;
  background-color: ${black[400]};
`;

const Item = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px;
  border-bottom: none;
  cursor: pointer;
`;
