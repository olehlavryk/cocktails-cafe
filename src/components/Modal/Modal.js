import React, { useContext } from "react";
import ReactDOM from 'react-dom';
import { ThemeContext } from "src/components/App/App";
import { OrderedTable } from "src/components/OrderedTable/OrderedTable";
import "./Modal.css";

export const Modal = ({
    isOpen,
    closeModalWindow,
    Title,
    orderedCocktails
}) => {
    const { state, setState, setOpen } = useContext(ThemeContext);

    const orderSubmitHandler = () => {
        console.log("Ordered cocktails", state)
        setState([])
        setOpen(false);
    }

    return (
        isOpen && ReactDOM.createPortal(
            <div className="ModalWrapper">
                <div className="Modal">
                    <h1 className="modal-title">{Title}</h1>
                    <div className="close" onClick={closeModalWindow}>&#x274C;</div>
                    {orderedCocktails.length > 0 ? (
                        <>
                            <OrderedTable {...{ orderedCocktails }} />
                            <div className="btn-wrapper">
                                <button
                                    onClick={orderSubmitHandler}
                                    className="btn btn-success confirm-btn"
                                >
                                    Confirm order
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="small-heading basket-empty">
                            No ordered cocktails!
                        </div>
                    )}
                </div>
            </div>,
            document.getElementById("modal")
        )
    )
}