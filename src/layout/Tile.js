import styled from "styled-components";
import {
  subtleBoxShadow,
  lightBackground,
  customBoxShadow
} from "../styles/styles";

export const Tile = styled.div`
  ${lightBackground}
  padding:10px;
  box-shadow: 0px 0px 1000px -20px #0c98ea45;
  border-radius: 6px;
`;

export const SelectableTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${subtleBoxShadow}
  }
`;

export const DeletableTile = styled(SelectableTile)`
  &:hover {
    cursor: pointer;
    ${customBoxShadow}
  }
`;
export const DisabledTile = styled(Tile)`
  pointer-events: none;
  opacity: 0.4;
`;
