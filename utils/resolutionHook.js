import { useEffect, useState } from "react";

export default function ComponentReSize() {
  const [isMobile, setisMobile] = useState(false);
  useEffect(() => {
    let checkSize = false;
    if (!checkSize) {
      updateDimensions();
      checkSize = true;
    }
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    if (window.outerWidth <= 1024) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  };
  return isMobile;
}
