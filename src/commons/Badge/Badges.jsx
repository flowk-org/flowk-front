import React from "react";
import "./Badges.css";

const Badges = ({text = "#1", bgColor}) => {
    return (
        <div className="badges" style={{backgroundColor: `${bgColor}`}}>
            {text}
        </div>
    );
};

export default Badges;