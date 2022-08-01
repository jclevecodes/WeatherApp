import React from 'react';
import './InputStyling.css';

const Input = () => {
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
        <div class="input-container">
            <input type="text" id="username" class="text-input" autocomplete="off" placeholder="Please Enter Location" required />
            <label class="label" for="username">Enter Location</label>
        </div>
    </form>   

  )
}

export default Input