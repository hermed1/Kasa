import React, { useState } from 'react';
import './Collapse.css';
import arrowtop from '../../assets/Vector_top.png';
import arrowbottom from '../../assets/Vector_bottom.png';

const Collapse = ({ title, content, className }) => {
  const [collapseState, setCollapseState] = useState(false);
  const handleClickCollapse = () => {
    setCollapseState(!collapseState);
  };
  return (
    <div className={`collapse ${className}`}>
      <button
        className='collapse__button'
        onClick={() => handleClickCollapse()}
      >
        {title}
      </button>
      <img
        src={arrowtop}
        alt='arrowtop'
        className={
          collapseState ? 'arrow_display arrow' : 'arrow_invisible arrow'
        }
      />
      <img
        src={arrowbottom}
        alt='arrowbottom'
        className={
          collapseState ? 'arrow_invisible arrow' : 'arrow_display arrow'
        }
      />

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
