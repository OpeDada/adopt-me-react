import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

// App below is a function that returns the result of React.createElement
// App is a react component

const App = () => {
  return (
  <div>
    <h1>Adopt Me</h1>
    <SearchParams />
  </div>
  );
};


ReactDOM.render(<App />, document.getElementById("root"));
