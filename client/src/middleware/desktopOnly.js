// src/components/DesktopOnly.js
import React, { useEffect, useState } from "react";

const DesktopOnly = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h1>This site is only available on desktop devices.</h1>
      </div>
    );
  }

  return <>{children}</>;
};

export default DesktopOnly;
