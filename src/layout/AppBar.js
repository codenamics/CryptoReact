import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../AppProvider";
const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 150px 150px;
  margin-bottom: 40px;

  min-height: 80px;
  align-items: center;
`;
const Logo = styled.h1`
  text-align: center;
  font-size: 30px;
`;

const ControlButton = styled.button`
  padding: 10px 0;
background:none;
  color: #9A96A7;
  border: none;
  font-size: 17px
  outline:none;
  cursor: pointer;
  min-width:0px;
    ${props =>
      props.active &&
      css`
        border-bottom: 3px solid #51ce65;
      `};
`;

function toUpperCase(lower) {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlBtn({ name }) {
  return (
    <AppContext.Consumer>
      {({ page, setPage }) => (
        <ControlButton active={page === name} onClick={() => setPage(name)}>
          {toUpperCase(name)}
        </ControlButton>
      )}
    </AppContext.Consumer>
  );
}

export default function AppBar() {
  return (
    <Bar>
      <Logo> Crypto </Logo> <div />
      <ControlBtn active name="dashboard" />
      <ControlBtn name="settings" />
    </Bar>
  );
}
