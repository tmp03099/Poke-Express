const React = require("react");

function Show({ pokemon }) {
  return (
    <div style={div}>
      <h1 style={indexStyle}>List of Pokemon!</h1>

      <div>
        <h4>Pokemon Name : {ele.name}</h4>
        <img src={ele.img} alt="pokemon.img" />
      </div>
    </div>
  );
}

module.exports = Show;
