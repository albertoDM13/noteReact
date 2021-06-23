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
      <div>
        <div class="body">
          <div id="boxComment" class="box-comment">
            <ComponentRegis clase={'Component-Regis'} value={this.state.msg} />
            <ComponentRegis clase={'Component-Regis'} />
            <ComponentRegis clase={'Component-Regis'} />
          </div>

          <div className="boxWriter" id="CWriter">
            <ComponentTextarea
              code={'comment-box-writer'}
              clase={'writer-box-component'}
              info={'Escribe tu Comentario'}
            />
          </div>
          <div className="boxButton" id="CButton">
            <div className={'LTR'} />
            <div className="box-button">
              <ComponentInput
                clase={'Button'}
                tipo={'Button'}
                valor={this.state.titleButtonAdd}
                funcion={this.readComment}
              />
              <ComponentInput
                clase={'Button'}
                tipo={'Button'}
                valor={this.state.titleButtonCan}
              />
            </div>
            <div className="LTR" />
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
