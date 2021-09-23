import React from 'react';
import styled from 'styled-components';

interface MenuTitleProps {
  title: string;
}
export default function MenuTitle({ title }: MenuTitleProps) {
  return <Title>{title}</Title>;
}

const Title = styled.h2`
  color: white;
  font-size: 18px;
  font-weight: 500;
  margin: 5px;
`;
