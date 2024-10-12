import { useState, useEffect } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 500) {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768); // Define mobile breakpoint
      };

      handleResize(); // Set initial value
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return isMobile;
};
