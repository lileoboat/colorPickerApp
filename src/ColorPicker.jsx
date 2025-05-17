import React, { useState } from 'react'

function ColorPicker() {
    const [color, setColor] = useState('#000000')


    function handleColorChange(event){
      setColor(event.target.value);
    };



  return (
    <div className='app-container'>
        <h1>Color Picker</h1>
        <div className='display-color' style={{ backgroundColor: color }}>
            <p>Color: {color}</p>
        </div>
        <label>Select Color: </label>
        <input type="color" value={color} onChange={handleColorChange} />
    </div>
  )
}

export default ColorPicker