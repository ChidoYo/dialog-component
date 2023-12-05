import React from 'react';
import './App.css';
import './webComponent/dialog_component'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "dialog-component": DialogComponentProps;
    }
  }
}

interface DialogComponentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  trigger: string;
  target: string;
}

function App() {
  return (
    <div>
      <h1>¡Hola!</h1>

      <div className='sample'>
        <p>Plain File Input</p>
        Upload
        <input
          type="file"
          id="plain"
          className='input-file'
          onChange={() => console.log('Outside Dialog')}
          accept="image/jpeg, image/png"
        />
      </div>

      <button className="btn-open" id="openDialog">Open Modal</button>

      <dialog-component id="dialogSample" trigger="openDialog" target="myDialog">
        <div>
          <p>File Upload in Dialog</p>
          <label htmlFor="outter-one" className='input-label'>
            Upload Picture
            <input
              type="file"
              id="outter-one"
              className='input-file'
              accept="image/jpeg, image/png"
              onChange={() => console.log('Inside Component')}
            />
          </label>          
        </div>
      </dialog-component>
    </div>
  );
}

export default App;
