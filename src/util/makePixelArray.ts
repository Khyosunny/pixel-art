import { ODD_COLOR, EVEN_COLOR } from 'styles/colors';

const makeTransparentPattern = (length: number) => {
  const oddArray: string[] = [];
  const evenArray: string[] = [];
  for (let i = 0; i < length; i++) {
    if (i % 2 === 0) {
      oddArray.push(EVEN_COLOR);
      evenArray.push(ODD_COLOR);
    } else {
      oddArray.push(ODD_COLOR);
      evenArray.push(EVEN_COLOR);
    }
  }
  return { oddArray, evenArray };
};

export const makePixelArray = (length: number) => {
  const { oddArray, evenArray } = makeTransparentPattern(length);
  const pixelArray: string[][] = [];

  for (let i = 0; i < length; i++) {
    if (i % 2 === 0) {
      pixelArray.push(evenArray);
    } else {
      pixelArray.push(oddArray);
    }
  }
  return pixelArray;
};
