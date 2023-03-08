import React from "react";

function Card(drops){
    return(
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {drops.emoji}
            </span>
            <span>{drops.name}</span>
          </dt>
          <dd>
            {drops.description}
          </dd>
        </div>
    )
}

export default Card