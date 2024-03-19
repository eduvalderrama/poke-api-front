import { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const button = document.getElementById("scrollToTopButton");
      if (button) {
        if (window.scrollY > 200) {
          button.style.display = "block";
        } else {
          button.style.display = "none";
        }
      }
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
      className="btn btn-primary rounded-circle position-fixed bottom-0 end-0 m-4"
      onClick={scrollToTop}
      style={{ display: "none" }}
    >
      <FaArrowUp />
    </button>
  )
}

export default ScrollToTop;