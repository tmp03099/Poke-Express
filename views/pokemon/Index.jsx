const React = require("react");

const indexStyle = {
  color: "Red",
  border: "5px double #d8ff00 ",
  padding: "10px",
  textAlign: "center",
};

const navBar = {
  textAlign: "left",
  borderRadius: "5px",
  padding: "7px",
  background: "orange",
  color: "white",
};

const div = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "10%",
  justifyContent: "center",
  marginTop: "20px",
};

const eachPoke = {
  border: "2px inset gray",
  padding: "20px",
  margin: "10px 0",
};

function Index({ pokemon }) {
  return (
    <div>
      <h1 style={indexStyle}>List of Pokemon!</h1>
      <nav>
        <a style={navBar} href="/pokemon/new">
          ADD POKEMON
        </a>
      </nav>
      <div style={div}>
        {pokemon.map((ele, idx) => {
          return (
            <div key={idx} style={eachPoke}>
              <h4>
                Pokemon Name : <a href={`/pokemon/${ele._id}`}>{ele.name}</a>
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
