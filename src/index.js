import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import skills from "../src/skills"

const DataList = ({ id, options }) => (
  <datalist id={"data-list-" + id}>
    {options.map((o, i) => <option key={i}>{o}</option>)}
  </datalist>
);

class AutoComplete extends React.Component {
  randomId = () =>
    Math.floor((1 + Math.random()) * 0x100000)
      .toString(16)
      .substring(0);

  state = { id: this.randomId() };

  render() {
    return (
      <React.Fragment>
        <DataList id={this.state.id} options={this.props.options} />
        <input type="text" list={"data-list-" + this.state.id} />
      </React.Fragment>
    );
  }
}

const App = () => (
  
<div className="App">
    <strong>Add your skills here</strong><br/>
    <AutoComplete
      options={skills}
    />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
