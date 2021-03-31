import React from 'react';
import './style.scss';

const Button = () => {
  const handleRipples = (e) => {
    const containerX = e.target.offsetParent.getBoundingClientRect().left;
    const containerY = e.target.offsetParent.getBoundingClientRect().top;
    const buttonX = e.target.offsetLeft;
    const buttonY = e.target.offsetTop;
    let x = e.clientX - (containerX + buttonX);
    let y = e.clientY - (containerY + buttonY);

    let ripple = document.createElement('span');
    ripple.classList.add('ripple');
    console.log('ripple', ripple);
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    e.target.appendChild(ripple);
  };
  return (
    <button className='button' onClick={(e) => handleRipples(e)}>
      Hello Click me!
    </button>
  );
};

export default Button;
