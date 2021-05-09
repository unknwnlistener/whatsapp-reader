import React from "react";

export const Loader = ({visible}) => {
	
		return ( visible ? [
      <div className="loader-container">
      <div className="loader">
        Loading...
      </div>
      </div>
    ] : null
    );
}