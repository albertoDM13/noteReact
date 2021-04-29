import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import ComponentInput from './ComponentInput';
import './style.css';

interface AppProps { }
interface AppState {
  name: string
  titleButtonAdd: String
  titleButtonCan: String
  placeholder: String;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Delete',
      titleButtonAdd: 'Agregar',
      titleButtonCan: 'Cancelar',
      placeholder: 'Escribe Nota'
    };
  }

  render() {
    return (
      <div>
        <div class="cajaWriter" id="CWriter">
          <ComponentInput value={this.state.placeholder}/>
        </div>
        <div class="cajaDow" id="CButton">
          <ComponentInput clase={'Button'} tipo={'Button'} valor={this.state.titleButtonAdd}/>
          <ComponentInput clase={'Button'} tipo={'Button'} valor={this.state.titleButtonCan}/>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
