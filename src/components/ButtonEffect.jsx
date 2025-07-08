import React from "react";

const ButtonEffect = () => {
  const handleMouseMove = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    button.style.setProperty("--xPos", `${x}px`);
    button.style.setProperty("--yPos", `${y}px`);
  };

  return (
    <button
      onMouseMove={handleMouseMove}
      className="relative px-10 py-5 bg-cyan-300 text-black font-medium rounded-xl shadow-md overflow-hidden group border-none outline-none"
      style={{
        "--xPos": "50%",
        "--yPos": "50%",
      }}
    >
      <span className="relative z-10">Download Cv</span>
      <span
        className="absolute w-0 h-0 bg-orange-600 rounded-full transition-all duration-500 ease-in-out group-hover:w-[300px] group-hover:h-[300px]"
        style={{
          left: "var(--xPos)",
          top: "var(--yPos)",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
        }}
      />
    </button>
  );
};

export default ButtonEffect;