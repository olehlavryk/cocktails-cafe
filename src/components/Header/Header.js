import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Basket } from 'src/components/Basket/Basket';
import { cafeName } from "src/config/config";
import { BsSearch } from "react-icons/bs";
import "./Header.css";

export const Header = () => {
    let history = useHistory();
    const [search, setSeach] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        history.push(`/cocktails?s=${search}`);
        setSeach("")
    }

    return (
        <header id="header">
            <div className="container">
                <div className="header-content">
                    <form onSubmit={onSubmit}>
                        <div className="search-box">
                            <button className="btn-search">
                                <BsSearch />
                            </button>
                            <input
                                type="text"
                                value={search}
                                className="input-search"
                                placeholder="Type to Search..."
                                onChange={(e) => setSeach(e.target.value)}
                            />
                        </div>
                    </form>
                    <div className="logo-wrapper">
                        <h1 className="logo-heading">
                            <Link to="/" >{cafeName}</Link>
                        </h1>
                        <p className="logo-description">Fresh awesomeness</p>
                    </div>

                    <Basket />
                </div>
            </div>
        </header>
    )
}