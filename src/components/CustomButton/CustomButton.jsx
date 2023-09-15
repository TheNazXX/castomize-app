import React from 'react';
import state from '../../store';
import { useSnapshot } from 'valtio';

export const CustomButton = ({type, customStyles, handleClick, title}) => {

  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if(type === 'filled'){
      return {
        backgroundColor: snap.color,
        color: "#fff"
      };
    };
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