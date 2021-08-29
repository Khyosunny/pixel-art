import { CirclePicker, ColorChangeHandler } from 'react-color';

interface PaletteProps {
  color: string;
  handleColorChange: ColorChangeHandler;
}

export default function Palette({ color, handleColorChange }: PaletteProps) {
  return <CirclePicker color={color} onChange={handleColorChange} />;
}
