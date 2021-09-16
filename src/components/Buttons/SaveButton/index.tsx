import styled from 'styled-components';
import SaveAltIcon from '@material-ui/icons/SaveAlt';

export default function SaveButton() {
  return (
    <Button>
      <SaveAltIcon />
      Save
    </Button>
  );
}

const Button = styled.button`
  padding: 20px 20px;
  font-size: 24px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3182f6;
  transition: all 200ms ease;

  &:hover {
    background: #076bf7;
  }
  svg {
    &.MuiSvgIcon-root {
      width: 30px;
      height: 30px;
    }
    fill: #fff;
    margin-right: 10px;
  }
`;
