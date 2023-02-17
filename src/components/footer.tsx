import React from "react";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer>
      <a href="https://www.google.se">
        <Icon icon="fa:twitter" width="25px" height="25px" />
      </a>
      <a href="https://www.google.se">
        <Icon icon="fa:facebook" width="25px" height="25px" />
      </a>
      <a href="https://www.google.se">
        <Icon icon="fa:instagram" width="25px" height="25px" />
      </a>
      <a href="https://github.com/Sn1cke">
        <Icon icon="fa:github" width="25px" height="25px" />
      </a>
    </footer>
  );
}
