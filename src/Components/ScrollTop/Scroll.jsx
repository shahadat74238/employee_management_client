
const Scroll = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="z-10">
      <button
        onClick={scrollToTop}
      >
        scroll
      </button>
    </div>
  );
};

export default Scroll;
