import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full shrink-0 w-80 bg-red-200 overflow-hidden relative rounded-4xl">
      <img
        className="h-full w-full object-cover"
        src={props.img}
        alt=""
      />

      <RightCardContent tag={props.tag} id={ props.id} color={props.color}/>
    </div>
  );
};

export default RightCard;
