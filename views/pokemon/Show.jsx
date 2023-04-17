const React = require("react");

function Show({ poke }) {
  return (
    <div>
      <h1>Gotta Catch 'Em All</h1>
      <h2>{poke.name}</h2>
      <img src={poke.img} alt="poke.img" /> <br />
      <a href="/pokemon">Back</a>
    </div>
  );
}

module.exports = Show;
