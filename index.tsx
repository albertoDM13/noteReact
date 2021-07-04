import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import ComponentInput from './ComponentInput';
import ComponentTextarea from './ComponentTextarea';
import ComponentRegis from './ComponentRegis';
import './style.css';

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
      name: 'Delete',
      titleButtonAdd: 'Agregar',
      titleButtonCan: 'Cancelar',
      placeholder: 'Escribe Nota',
      msg: ''
    };
  }

  readComment() {
    alert(document.getElementById('comment-box-writer').value);
  }

  render() {
    return (
      <div class="doby">
        <div id="boxComment" class="boxComment" />
        <div class="boxDown">
          <div className="boxWriter" id="CWriter">
            <ComponentTextarea
              clase="writer-box-component"
              info="Escribe tu Comentario..."
            />
          </div>

          <div className="boxButton" id="CButton" />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
