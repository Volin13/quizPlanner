import React, { useState } from 'react';
import css from './TooltipWrapper.module.css';

const TooltipWrapper = ({ children, tooltipText }) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const showTooltip = (e) => {
    setVisible(true);
    setCoords({ x: e.clientX, y: e.clientY });
  };

  const moveTooltip = (e) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  const hideTooltip = () => {
    setVisible(false);
  };

  return (
    <span
      onMouseEnter={showTooltip}
      onMouseMove={moveTooltip}
      onMouseLeave={hideTooltip}
      className={css.tooltipWrapper}
    >
      {children}
      {visible && (
        <div
          style={{
            top: coords.y + 10,
            left: coords.x + 10,
          }}
          className={css.tooltip}
        >
          <div className={css.tooltipText}>

          {tooltipText}
          </div>
        </div>
      )}
    </span>
  );
};

export default TooltipWrapper;
