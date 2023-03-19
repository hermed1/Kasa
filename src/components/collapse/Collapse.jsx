import React, { useState } from 'react';
import './Collapse.css';
import arrowtop from '../../assets/Vector_top.png';
import arrowbottom from '../../assets/Vector_bottom.png';

const Collapse = ({ title, content, className, classNameButton }) => {
  // Declare a state variable for the collapse state and set its initial value to false
  const [collapseState, setCollapseState] = useState(false);

  // Define a function to handle the click event for collapsing and expanding the content
  const handleClickCollapse = () => {
    setCollapseState(!collapseState);
  };

  return (
    <div className={`collapse ${className}`}>
      {/* Display the button to toggle the collapse state */}
      <button
        className={`collapse__button ${classNameButton}`}
        onClick={() => handleClickCollapse()}
      >
        {title}
      </button>
      {/* Display the up arrow when the content is expanded */}
      <img
        src={arrowtop}
        alt='arrowtop'
        className={
          collapseState ? 'arrow_display arrow' : 'arrow_invisible arrow'
        }
      />
      {/* Display the down arrow when the content is collapsed */}
      <img
        src={arrowbottom}
        alt='arrowbottom'
        className={
          collapseState ? 'arrow_invisible arrow' : 'arrow_display arrow'
        }
      />

      {/* Display the collapsible content */}
      <div
        className={
          collapseState ? 'collapse__p collapse__para' : 'collapse__state'
        }
      >
        {content}
      </div>
    </div>
  );
};

export default Collapse;
