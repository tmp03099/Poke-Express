const React = require("react");

const indexStyle = {
  color: "Red",
  border: "5px double #d8ff00 ",
  padding: "10px",
};

const div = {
  display: "flex",
  justifyContent: "center",
};

function Index() {
  return (
    <div style={div}>
      <h1 style={indexStyle}>List of Pokemon!</h1>
    </div>
  );
}

module.exports = Index;
