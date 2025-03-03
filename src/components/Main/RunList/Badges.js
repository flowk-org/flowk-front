import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Badges = ({
                           text = "Badges",
                           color,
                           variant,
                           style,
                           className,
                           divClassName,
                       }) => {
    return (
        <div className={`badges ${style} ${variant} ${color} ${className}`}>
            <div className={`text-wrapper ${divClassName}`}>{text}</div>
        </div>
    );
};

Badges.propTypes = {
    text: PropTypes.string,
    color: PropTypes.oneOf([
        "warning",
        "danger",
        "info",
        "success",
        "secondary",
        "primary",
        "light",
        "dark",
    ]),
    variant: PropTypes.oneOf(["fill", "soft"]),
    style: PropTypes.oneOf(["pill", "simple"]),
};