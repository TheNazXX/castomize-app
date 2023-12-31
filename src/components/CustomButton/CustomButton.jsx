import React from 'react';
import state from '../../store';
import { useSnapshot } from 'valtio';

import { getContrastingColor } from '../../utils/helpers';

export const CustomButton = ({type, customStyles, handleClick, title}) => {

  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if(type === 'filled'){
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color)
      };
    }else if(type == "outline"){
      return {
        borderWidth: "1px",
        borderColor: snap.color,
        color: getContrastingColor(snap.color)
      }
    }
  };

  return (
    <button
      className={`px-2 py-1.5 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};