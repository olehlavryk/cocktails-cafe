import React, { useContext } from "react";
import { ThemeContext } from "src/components/App/App";
import "./OrderedTable.css";

export const OrderedTable = ({ orderedCocktails }) => {
    const { handleRemoveFromBasket } = useContext(ThemeContext);

    return (
        <table className="ordered-table">
            <thead>
                <tr>
                    <th>Cocktail</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {orderedCocktails.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <span
                                    className="remove-cocktail"
                                    onClick={() => handleRemoveFromBasket(item.id)}
                                >
                                    &#x274C;
                                </span>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
