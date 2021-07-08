import React, { useState, useEffect } from 'react';
import { Heading } from "src/components/Heading/Heading";
import { AddToBaksetButton } from "src/components/AddToBaksetButton/AddToBaksetButton";
import "./CocktailSingle.css";

export const CocktailSingle = ({ cocktail, recommendation = false }) => {

    const [ingredients, setIngredients] = useState([])

    const getAllIngridients = () => {
        let filtered = Object.keys(cocktail)
            .filter(key => /^strIngredient/.test(key))
            .reduce((obj, key) => {
                obj[key] = cocktail[key];
                return obj;
            }, {});

        return Object.values(filtered).filter((value) => value !== null && value !== "")
    }

    useEffect(() => {
        const data = getAllIngridients();
        setIngredients(data)

    }, [cocktail])

    const { idDrink, strCategory, strDrink, strDrinkThumb, strInstructions } = cocktail;

    return (
        <article className="cocktail-single">
            {recommendation && (
                <div className="box-label-wrapper">
                    <span className="box-label">Personal recommendation</span>
                </div>
            )}

            <Heading
                title={strDrink}
                description={strCategory}
            />
            <div className="coctail-content">
                <div className="cocktail-preview">
                    <img src={strDrinkThumb} alt={strDrink} />
                </div>

                <div className="insturctions">
                    <h3 className="small-heading">Instructions</h3>
                    {strInstructions}
                </div>

                <div className="ingridients">
                    <h3 className="small-heading">Ingridients</h3>
                    {
                        ingredients && (
                            <ol>
                                {ingredients.map(item => <li key={item}>{item}</li>)}
                            </ol>
                        )
                    }
                </div>

                <AddToBaksetButton
                    order={{ idDrink, strDrink }}
                >
                    Order {strDrink}
                </AddToBaksetButton>
            </div>
        </article>
    )
}