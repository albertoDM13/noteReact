import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import ComponentInput from "./ComponentInput";
import "./style.css";

interface AppProps {}
interface AppState {
  name: string;
  titleButtonAdd: String;
  titleButtonCan: String;
  placeholder: String;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "Delete",
      titleButtonAdd: "Agregar",
      titleButtonCan: "Cancelar",
      placeholder: "Escribe Nota"
    };
  }

  render() {
    return (
      <div>
        <div className="cajaWriter" id="CWriter">
          <ComponentInput clase={"input-text"} tipo={"text"} />
        </div>
        <div className="cajaDow" id="CButton">
          <div className={"LTR"}></div>
          <div className="box-button">
            <ComponentInput
              clase={"Button"}
              tipo={"Button"}
              valor={this.state.titleButtonAdd}
            />
            <ComponentInput
              clase={"Button"}
              tipo={"Button"}
              valor={this.state.titleButtonCan}
            />
          </div>
          <div className="LTR"></div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
