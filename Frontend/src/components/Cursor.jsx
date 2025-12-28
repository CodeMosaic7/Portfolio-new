import { useEffect } from "react";
import "../styles/cursor.css";
const Cursor = () => {
  useEffect(() => {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);
    const moveGlow = (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", moveGlow);
    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  return null;
};

export default Cursor;
