import React from 'react';
import ReactDOM from 'react-dom';
import Typeform from 'react-typeform';

import './styles.css';

function App() {
  const onSubmit = values => {
    console.info('Submitting', values);
  };

  return (
    <div className="App">
      <Typeform onSubmit={onSubmit}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </Typeform>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
