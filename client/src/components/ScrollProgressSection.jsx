import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollTop = window.scrollY;
      const progress = (scrollTop / totalHeight) * 100;

      setScroll(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-wrapper">
      <div
        className="scroll-progress"
        style={{ height: `${scroll}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgress;