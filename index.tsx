import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Button from './Button';
import InputText from './InputText';
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
          <InputText value={this.state.placeholder}/>
        </div>
        <div class="cajaDow" id="CButton">
          <Button value={this.state.titleButtonAdd}/>
          <Button value={this.state.titleButtonCan}/>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
