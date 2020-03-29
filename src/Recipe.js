import React from 'react';
import style from './recipe.module.css'

function Recipe  ({title, calories, image}) {
   
    return(
        <div className={style.recipes}>
            <h1>Title : {title}</h1>
            <p>Calories : {calories}</p>
            <img className={style.recipes} src={image} alt=""></img>
            
        </div>
    );
};

export default Recipe;