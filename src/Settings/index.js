import React from "react";
import Welcome from "./Welcome";
import ConfirmButton from "./ConfirmButton";
import Page from "../layout/Page";
export default function() {
  return (
    <Page name="settings">
      <Welcome />;
      <ConfirmButton />
    </Page>
  );
}
