import React from "react";
import Welcome from "./Welcome";
import ConfirmButton from "./ConfirmButton";
import Page from "../layout/Page";
import CoinGrid from "./CoinGrid";
export default function() {
  return (
    <Page name="settings">
      <Welcome />
      <CoinGrid topSection />
      <ConfirmButton />
      <CoinGrid />
    </Page>
  );
}
