import React, { useState } from 'react'


const InputRange = () => {

  const [range, setRange] = useState(5000);

  const ChangeRange = (e) => {
    setRange(e.target.value);
    const slide = document.getElementsByTagName('input').priceRange
    const price = document.getElementsByClassName('dollars');
    const float = parseFloat(slide.value);
    const rangeInput = float / 100;
    if (Number.isInteger(rangeInput)) price[0].innerHTML = `${parseFloat(rangeInput)}.00`;
    else price[0].innerHTML = parseFloat(rangeInput);
  }

  return (
    <>
    <input
      type="range"
      id="priceRange"
      min="0" max="10000"
      step="1" value={range}
      className="inputR"
      onChange={(e) => ChangeRange(e)} />
      </>
  )
}

export default InputRange


