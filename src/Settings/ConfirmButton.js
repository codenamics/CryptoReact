import React from "react";
import { AppContext } from "../AppProvider";
import styled from "styled-components";

const ConfirmButtonEl = styled.button`
  margin: 20px;
  color: green;
  cursor: pointer;
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
