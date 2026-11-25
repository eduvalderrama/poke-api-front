import { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const button = document.getElementById("scrollToTopButton");
      if (!button) return;
      button.style.display = window.scrollY > 200 ? "block" : "none";
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      id="scrollToTopButton"
      type="button"
      className="scroll-top"
      onClick={scrollToTop}
      aria-label="Volver arriba"
      style={{ display: "none" }}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
