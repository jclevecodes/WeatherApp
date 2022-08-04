import React from 'react';
import './InputStyling.css';


const Input = (inputLocation, formSubmit) => {
    document.querySelectorAll(".text-input").forEach((element) => {
        element.addEventListener("blur", (event) => {
            if (event.target.value !== "") {
                event.target.nextElementSibling.classList.add("filled");
            } else {
                event.target.nextElementSibling.classList.remove("filled");
            }
        });
    });
    
  return (
    <form className='input-form'>
        <div className="input-container">
            <input type="text" id="username" className="text-input" autoComplete='off' placeholder="Please Enter Location" required />
            <label className="label" >Enter Location</label>
        </div>
    </form>   

  )
}

export default Input