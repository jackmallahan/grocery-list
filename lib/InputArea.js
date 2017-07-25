import React from 'react'

export default function InputArea(props) {

  function handleKeyPress(e) {
    if(e.keyCode === 13) {
      props.handleBtnClick()
    }
  }

  return (
    <div>
      <input
        type="text"
        value={props.inputVal}
        onChange={ props.handleChange }
        onKeyDown={handleKeyPress}
      />
      {
        props.inputVal &&
        <button onClick={props.handleBtnClick}>
            Add
        </button>
      }
    </div>
  )
}
