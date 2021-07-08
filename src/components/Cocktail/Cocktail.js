import React from "react";
import { Link } from "react-router-dom";
import "./Cocktail.css";

export const Cocktail = ({ cocktail }) => {
    const { idDrink, strDrinkThumb, strCategory, strDrink, strInstructions } = cocktail;
    const instructions = strInstructions.length > 250 ? `${strInstructions.substring(0, 250)} ...` : strInstructions;

    return (
        <article key={idDrink} className="cocktail">
            <div className="cocktail-preview-wrapper">
                <div className="cocktail-extra-info">
                    {instructions}
                </div>
                <Link to={`/cocktail/${idDrink}`}>
                    <img src={strDrinkThumb} className="cocktail-preview" alt={strDrink} />
                </Link>
            </div>

            <div className="coctail-text">
                <div className="cocktail-category">{strCategory}</div>
                <h3 className="cocktail-name">
                    <Link to={`/cocktail/${idDrink}`}>
                        {strDrink}
                    </Link>
                </h3>
            </div>
        </article>
    )
}