import React, { useState, useRef, useEffect } from "react";

const DraggableQuestionMark = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dropped, setDropped] = useState(false);
  const questionRef = useRef(null);

  const startDragging = () => {
    setIsDragging(true);
  };

  const stopDragging = () => {
    setIsDragging(false);
    if (questionRef.current) {
      setDropped(true);
    }
  };

  const drag = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - questionRef.current.offsetWidth / 2,
        y: e.clientY - questionRef.current.offsetHeight / 2,
      });
    }
  };

  useEffect(() => {
    if (dropped) {
      // Анімація падіння
      const interval = setInterval(() => {
        setPosition((prevPosition) => {
          const newY = prevPosition.y + 5;
          if (newY < window.innerHeight) {
            return { ...prevPosition, y: newY };
          } else {
            clearInterval(interval);
            return prevPosition;
          }
        });
      }, 10);
    }
  }, [dropped]);

  return (
    <div
      ref={questionRef}
      onMouseDown={startDragging}
      onMouseMove={startDragging && drag}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
      style={{
        position: "fixed",
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: "grab",
        fontSize: "30px",
        transition: "top 0.2s",
      }}
    >
      ?
    </div>
  );
};

export default DraggableQuestionMark;
