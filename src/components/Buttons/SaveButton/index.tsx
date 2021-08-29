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
  padding: 5px 20px;
  font-size: 20px;
  color: #fff;
  background-color: tomato;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    fill: #fff;
    margin-right: 10px;
  }
`;
