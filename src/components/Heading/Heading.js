import React from 'react';
import "./Heading.css";

export const Heading = ({ title, description, ...props }) => {

    return (
        <div className="content-heading">
            <small className="heading-description">
                {description}
            </small>
            <h2 className="heading-title">
                {title}
            </h2>
        </div>
    )
}
