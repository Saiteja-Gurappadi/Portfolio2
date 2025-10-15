import React, { useEffect, useState } from "react";

const SHAPE_COUNT = 1; // Adjust the number of shapes

const getRandomShape = () => {
  const shapes = ["circle", "rectangle", "triangle"];
  return shapes[Math.floor(Math.random() * shapes.length)];
};

const getRandomStyle = () => {
  const size = Math.floor(Math.random() * 40) + 10; // size between 10 and 50
  const left = Math.random() * 100; // % from left
  const top = Math.random() * 100; // % from top
  const duration = Math.random() * 5 + 3; // seconds
  const delay = Math.random() * 5; // seconds

  return {
    width: size,
    height: size,
    left: `${left}%`,
    top: `${top}%`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
  };
};

const Shapes = () => {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    const newShapes = Array.from({ length: SHAPE_COUNT }).map(() => ({
      type: getRandomShape(),
      style: getRandomStyle(),
    }));
    setShapes(newShapes);
  }, []);

  return (
    <div className="absolute  left-0 w-full h-[100vh] overflow-hidden pointer-events-none z-20">
      {shapes.map((shape, idx) => (
        <div
          key={idx}
          className={`shape ${shape.type}`}
          style={shape.style}
        ></div>
      ))}
    </div>
  );
};

export default Shapes;
