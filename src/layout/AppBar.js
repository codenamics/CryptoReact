import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../AppProvider";
const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 150px 150px;
  margin-bottom: 40px;
  background-color: #fff;
  min-height: 80px;
  align-items: center;
`;
const Logo = styled.h1`
  text-align: center;
  font-size: 30px;
`;

const ControlButton = styled.button`
  border-radius: 22px;
  background-color: #fff;
  color: #9A96A7;
  border: none;
  font-size: 17px
  outline:none;
  cursor: pointer;
    ${props =>
      props.active &&
      css`
        background-color: #000;
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
      <Logo>Crypto</Logo>
      <div />
      <ControlBtn name="dashboard" />
      <ControlBtn name="settings" />
    </Bar>
  );
}
