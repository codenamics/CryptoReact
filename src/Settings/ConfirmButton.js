import React from "react";
import { AppContext } from "../AppProvider";
import styled from "styled-components";
import { BoxShadow } from "../styles/styles";
const ConfirmButtonEl = styled.button`
  margin: 20px;
  color: green;
  cursor: pointer;
  &:hover {
    ${BoxShadow}
  }
`;
export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;
export default function ConfirmButton() {
  return (
    <AppContext.Consumer>
      {({ confirmFavorites }) => (
        <CenterDiv>
          <ConfirmButtonEl onClick={confirmFavorites}>Confirm</ConfirmButtonEl>
        </CenterDiv>
      )}
    </AppContext.Consumer>
  );
}
