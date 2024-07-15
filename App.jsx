import React, { useState } from "react";
import "./App.css";
import pictures from "./pics.json";

function App() {
  const [type, setType] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategory = (category) => {
    setType(category);
    setSearchTerm(""); 
  };

  const filteredPictures = pictures.filter((picture) => {
   
    if (type && !picture.name.toLowerCase().startsWith(type.toLowerCase())) {
      return false;
    }
   
    if (searchTerm && !picture.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <>
      <h2>SnapShot</h2>
      <input
        type="search"
        name=""
        id=""
        placeholder="Search..."
        className="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="container">
        <button className="btn" onClick={() => handleCategory("Mountain")}>
          Mountain
        </button>
        <button className="btn" onClick={() => handleCategory("Beach")}>
          Beach
        </button>
        <button className="btn" onClick={() => handleCategory("Bird")}>
          Bird
        </button>
        <button className="btn" onClick={() => handleCategory("Food")}>
          Food
        </button>
      </div>
      {type && <h3>{type} Picture</h3>}
      {!type && searchTerm && <h3>Search results for "{searchTerm}"</h3>}
      <div className="images">
        {filteredPictures.map((picture) => (
          <div className="img" key={picture.id}>
            <img src={picture.url} alt={picture.name} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
