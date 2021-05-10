import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import ComponentInput from "./ComponentInput";
import ComponentTextarea from "./ComponentTextarea";
import "./style.css";

interface AppProps {}
interface AppState {
  name: string;
  titleButtonAdd: String;
  titleButtonCan: String;
  placeholder: String;}

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
        <div class="body">
          <div id="boxComment" class="box-comment">
          </div>

          <div className="cajaWriter" id="CWriter">
            <ComponentTextarea 
              code={'comment-box-writer'}
              clase={'writer-box-component'}
              info={'Escribe tu Comentario'}/>
          </div>
          <div className="cajaDow" id="CButton">
              <div className={"LTR"}></div>
                <div className="box-button">
                    <ComponentInput
                      clase={"Button"}
                      tipo={"Button"}
                      valor={this.state.titleButtonAdd}/>
                    <ComponentInput
                      clase={"Button"}
                      tipo={"Button"}
                      valor={this.state.titleButtonCan}/>
                </div>
              <div className="LTR"></div>
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
