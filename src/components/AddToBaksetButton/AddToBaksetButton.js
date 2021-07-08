import React, { useContext } from 'react';
import { ThemeContext } from "src/components/App/App";
import "./AddToBaksetButton.css";

export const AddToBaksetButton = ({ children, order, type = "success" }) => {
    const { handleAddToBasket } = useContext(ThemeContext);
    const { idDrink, strDrink } = order;
    return (
        <>
            { strDrink && (
                <button
                    className={`btn btn-${type}`}
                    onClick={() => handleAddToBasket({
                        id: idDrink,
                        name: strDrink,
                        quantity: 1
                    })}>
                    {children}
                </button>
            )}
        </>
    )
}