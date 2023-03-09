import React from "react";

import "../styles/tags.css";

function Tag({nom}) {
    return(
        <span className="tag">{nom}</span>
    );
}

export default Tag;