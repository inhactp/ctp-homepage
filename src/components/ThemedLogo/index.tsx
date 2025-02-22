import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function ThemedLogo() {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  return <img src={useBaseUrl(isDarkMode ? "/img/ctp_with_text_dark.svg" : "/img/ctp_with_text.svg")} alt="Themed" />;
}
