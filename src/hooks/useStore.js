import React, { useState } from "react";
import Api from "src/api/Api";

export const useStore = () => {
    const [state, setState] = useState([]);

    const [isOpen, setOpen] = useState(false);

    const getRandomCocktail = async () => {
        const responce = await Api.getRandomCocktail();

        if (!responce) {
            return null;
        }

        const { drinks } = responce;

        return drinks[0];
    }

    const getCocktailById = async (id) => {
        const responce = await Api.getCocktailById(id);
        const { drinks } = responce;

        if (!responce) {
            return null;
        }

        return drinks[0];
    }

    const getCocktailByQuery = async (query) => {
        const responce = await Api.getCoctailsByQuery(query);
        const { drinks } = responce;

        if (!responce) {
            return null;
        }

        return drinks;
    }

    const handleAddToBasket = (cocktail) => {
        const itemFoundIndex = state.findIndex(
            cp => cp.id === cocktail.id
        );

        let basketItem;

        if (itemFoundIndex !== -1) {
            basketItem = state.map((item, i) =>
                i === itemFoundIndex ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            basketItem = [...state, cocktail];
        }

        setState(basketItem);
    }

    const handleRemoveFromBasket = (id) => {

        const itemFoundIndex = state.findIndex(
            cp => cp.id === id
        );

        let basketItem;

        if (itemFoundIndex !== -1) {
            if (state[itemFoundIndex].quantity > 1) {
                basketItem = state.map((item, i) =>
                    i === itemFoundIndex ? { ...item, quantity: item.quantity - 1 } : item
                );
            } else {
                basketItem = state.filter(item => item.id !== id)
            }

        }

        setState(basketItem);
    }


    return {
        state,
        setState,
        getRandomCocktail,
        getCocktailById,
        getCocktailByQuery,
        handleAddToBasket,
        basketCounter: state.length,
        handleRemoveFromBasket,
        isOpen,
        setOpen,
    }
}