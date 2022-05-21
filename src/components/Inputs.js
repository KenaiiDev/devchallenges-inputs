import React from 'react'

const Inputs = ({ title, hover, focus, error, helperText, labelText, disabled, startIcon, endIcon, value, size, fullWidth }) => {

  let inputClasses = "inputs-container__input ";
  let helperTextClasses = "inputs-container__helper-text ";
  let labelClasses = "inputs-container__label ";

  if (hover) {
    inputClasses += "inputs-container__input-hover ";
  }else{
    if(focus){
      inputClasses += "inputs-container__input-focus ";
    }
  }

  if(size==="sm"){
    inputClasses += "sm ";
  }
  if(size==="lg"){
    inputClasses += "lg ";
  }

  if(error){
    inputClasses += "error ";
    helperTextClasses += "error ";
    labelClasses += "error ";
    if(hover){
      inputClasses += "error--hover ";
      helperTextClasses += "error--hover ";
    }else{
      if(focus){
        inputClasses += "error--focus ";
        helperTextClasses += "error--focus ";
      }
    }
    inputClasses += "error ";
    helperTextClasses += "error ";
    labelClasses += "error ";
  }
  let divClass="inputs-container__div ";
  if(fullWidth){
    divClass += "full-width ";
  }

  return (
    <>
      <div className={divClass}>
          <h2 className="inputs-container__title">{title}</h2>
          <div className="input-control">
            <input className={inputClasses} id="input-1" type="text" placeholder="Placeholder" value={value} disabled={disabled} />
            <span className={helperTextClasses}>{helperText}</span>
            <span className='material-icons start-icon'>{startIcon}</span>
            <span className='material-icons end-icon'>{endIcon}</span>
            <label htmlFor="input-1" className={labelClasses}>{labelText}</label>
          </div>
        </div>
    </>
  )
}

export default Inputs