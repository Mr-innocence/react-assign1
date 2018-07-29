import React, { Component } from 'react';
import './user.css'

const user = (prosp) =>{
    return(
        <div className = "User">
        <input type = "text" placeholder = "Username" onChange = {prosp.inputChange}/>
        <p>This is {prosp.userName} First Assignment.</p>
        <input type = "text" placeholder = "Food" onChange = {prosp.inputChange2}/>
        <p>My favoriate snack is {prosp.snake} </p>
    </div>
    )
    
}
export default user;

