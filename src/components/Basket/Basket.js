import React, { useContext } from 'react';
import { Icon } from "src/components/Icons/Icon";
import { ThemeContext } from "src/components/App/App";
import { Modal } from "src/components/Modal/Modal";
import { cafeName } from "src/config/config";
import "./Basket.css";

export const Basket = () => {
    const { state, isOpen, setOpen, basketCounter } = useContext(ThemeContext);

    const onClickHandler = (e) => {
        e.stopPropagation();
        setOpen(true);
    }

    return (
        <>
            <div
                className="basket"
                onClick={basketCounter > 0 ? onClickHandler : () => alert("First, choose a cocktail!")}
            >
                <Icon name="cocktail" />
                {basketCounter > 0 ?
                    (<span className="basket-counter">{` ${basketCounter}`}</span>) :
                    null
                }
            </div>

            <Modal
                Title={`${cafeName} Cart`}
                closeModalWindow={() => setOpen(false)}
                isOpen={isOpen}
                orderedCocktails={state}
            />
        </>
    )
}