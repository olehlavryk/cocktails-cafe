import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "src/components/App/App";
import { CocktailSingle } from "src/components/CocktailSingle/CocktailSingle";
import { Heading } from "src/components/Heading/Heading";
import "./Home.css";

export const Home = () => {
    const { getRandomCocktail } = useContext(ThemeContext);

    const [randomCocktail, setRandomCocktail] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const RandomCocktail = async () => {
            const random = await getRandomCocktail();

            setRandomCocktail(random);
            setLoading(false)
        }

        RandomCocktail();
    }, [])

    if (loading) {
        return (
            <div className={`loader-wrapper theme-light`}>
                <div className="loader" />
            </div>
        )
    }

    if (!randomCocktail) {
        return (
            <div className="home-page">
                <Heading
                    title="An error occurred"
                    description="Something went wrong!"
                />
            </div>
        )
    }

    return (
        <div className="home-page">
            <CocktailSingle cocktail={randomCocktail} recommendation />
            <div className="home-top-info">
                <span className="info-message">
                    Note! Use the search or filter to select a cocktail
                </span>
            </div>
        </div>
    )
}