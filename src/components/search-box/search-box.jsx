import React from 'react';
import "./search-box.css"

function SearchBox({placeholder,handleChange}) {
    return (
            <input className="search" placeholder={placeholder} type="search" onChange={handleChange} />
    )
}

export default SearchBox;
