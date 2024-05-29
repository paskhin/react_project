import { useState, useEffect } from "react";

export function SiteBar() {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    setScroll(window.scrollY / scrollHeight * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: '0',
      left: '0',
      width: `${scroll}%`,
      height: '5px',
      backgroundColor: 'red'
    }}></div>
  )
}
