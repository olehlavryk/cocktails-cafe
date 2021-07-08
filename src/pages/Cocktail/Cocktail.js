import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "src/components/App/App";
import { CocktailSingle } from "src/components/CocktailSingle/CocktailSingle";
import { useParams } from "react-router-dom";
import "./Cocktail.css";
import { Heading } from "src/components/Heading/Heading";

export const Cocktail = () => {
    const { id } = useParams();
    const [cocktail, setCocktail] = useState({});
    const [loading, setLoading] = useState(true);

    const { getCocktailById } = useContext(ThemeContext);

    useEffect(() => {
        const getCocktail = async () => {
            const cocktailData = await getCocktailById(id);
            setCocktail(cocktailData);
            setLoading(false)
        }

        getCocktail();

    }, [])

    if (loading) {
        return (
            <div className={`loader-wrapper theme-light`}>
                <div className="loader" />
            </div>
        )
    }


    if (!cocktail) {
        return (
            <div className="cocktail-page">
                <Heading
                    title="An error occurred"
                    description="Something went wrong!"
                />
            </div>
        )
    }

    return (
        <div className="cocktail-page">
            <CocktailSingle {...{ cocktail }} />
        </div>
    )
}