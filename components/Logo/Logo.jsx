import Image from "next/image";
import React from "react";

function Logo() {
  const [colorScheme, setColorScheme] = React.useState("");

  React.useEffect(() => {
    const rootElement = window.document.documentElement;
    const computedStyle = window.getComputedStyle(rootElement);
    const colorSchemeValue = computedStyle.getPropertyValue("color-scheme").trim();

    setColorScheme(colorSchemeValue);
  }, []);

  return (
    <div>
      {colorScheme === "dark" ? (
        <Image style={{ paddingTop: 35, paddingBottom: 35, paddingRight: 30 }} width={185} height={35} src="/img/logos/white_logo.png" alt="Dark Logo" />
      ) : (
        <Image style={{ paddingTop: 35, paddingBottom: 35, paddingRight: 30 }} width={185} height={35} src="/img/logos/black_logo.png" alt="Light Logo" />
      )}
    </div>
  );
}

export default Logo;
