import { useState, useEffect } from "react";

export function SiteBar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScroll(window.scrollY / scrollHeight * 100);
    };
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
      backgroundColor: '#FFD25D'
    }}></div>
  )
}
