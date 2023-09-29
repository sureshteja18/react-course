// const React = require("react");

/*
so here im implementing the above html code in react

     <div id='parent'>
        <div id='child'>
          <h1> im h1 from parent and child div<h1/>
        <div>
     <div/>
*/
const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement(
      "h1",
      { style: { color: "black" } },
      "I'm h1 from parent and child div"
    ),
    React.createElement(
      "h2",
      { style: { color: "red" } },
      "I'm h2 from parent and child div"
    ),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement(
      "h1",
      { style: { color: "black" } },
      "I'm h1 from parent and child div"
    ),
    React.createElement(
      "h2",
      { style: { color: "red" } },
      "I'm h2 from parent and child div"
    ),
  ]),
]);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
