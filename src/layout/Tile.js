import styled from "styled-components";
import {
  subtleBoxShadow,
  lightBackground,
  greenBoxShadow,
  redBoxShadow
} from "../styles/styles";

export const Tile = styled.div`
  ${lightBackground}
  padding:10px;
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
    ${redBoxShadow}
  }
`;
export const DisabledTile = styled(Tile)`
  pointer-events: none;
  opacity: 0.4;
`;
