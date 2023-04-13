const React = require("react");

const indexStyle = {
  color: "Red",
  border: "5px double #d8ff00 ",
  padding: "10px",
};

const div = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

function Index({ pokemon }) {
  return (
    <div style={div}>
      <h1 style={indexStyle}>List of Pokemon!</h1>
      <div>
        {pokemon.map((ele, idx) => {
          return (
            <div>
              <h4>
                Pokemon Name : <a href={`/pokemon/${idx}`}>{ele.name}</a>
              </h4>
              <img src={ele.img} alt="pokemon.img" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

module.exports = Index;
