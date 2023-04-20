import React from "react";
import "./Empty.css";

function Empty({ title, url, desc }) {
   return (
      <div className="empty container">
         <img width={120} src={url} alt="" />
         <h2>{title}</h2>
         <p>{desc}</p>
      </div>
   );
}

export default Empty;
