import React from 'react';
import { alphabet } from "src/config/config";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestSquare } from 'react-icons/fa';
import "./Footer.css";

export const Footer = () => {

    return (
        <footer id="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-left">
                        <h3 className="footer-heading">Opening</h3>
                        <div className="footer-description">
                            Friday - Saturday - Sunday
                        <span>
                                8 P.M
                        </span>
                        </div>
                    </div>
                    <div className="footer-middle">
                        {alphabet.map((letter) => (
                            <Link key={letter} to={`/cocktails?f=${letter}`}>{`${letter.toUpperCase()} `}</Link>
                        ))}
                    </div>
                    <div className="footer-right">
                        <h3 className="footer-heading">Location</h3>
                        <div className="footer-description">
                            8th Avenue
                        <span>
                                NYC
                        </span>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <ul className="footer-socil-list">
                        <li>
                            <Link to="/">
                                <FaInstagram />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <FaFacebookF />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <FaTwitter />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <FaPinterestSquare />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}