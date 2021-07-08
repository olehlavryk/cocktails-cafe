import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "src/components/App/App";
import { useLocation } from "react-router-dom";
import { Heading } from "src/components/Heading/Heading.js";
import { Cocktail } from "src/components/Cocktail/Cocktail";
import "./Cocktails.css";

export const Cocktails = () => {
    const { search } = useLocation();
    const { getCocktailByQuery } = useContext(ThemeContext);
    const [cocktails, setCocktails] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCocktails = async () => {
            const cocktailsData = await getCocktailByQuery(search);
            setCocktails(cocktailsData);
            setLoading(false);
        }

        getCocktails();

    }, [search]);

    if (loading) {
        return (
            <div className={`loader-wrapper theme-light`}>
                <div className="loader" />
            </div>
        )
    }

    if (!cocktails) {
        return (
            <div className="cocktails-page">
                <Heading
                    title="Cocktails not found!"
                />
            </div>
        )
    }

    return (
        <div className="cocktails-page">
            <Heading
                title="Fresh Cocktails"
                description="Top level combinations"
            />

            <div className="cocktails-box">
                {cocktails.map((cocktail) => (<Cocktail key={cocktail.idDrink} {...{ cocktail }} />))}
            </div>
        </div>
    )
}