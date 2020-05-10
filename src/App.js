import React, {useState} from 'react';
// import logo from './logo.svg';
import './styles/App.scss';
import Header from './components/Header';


function App() {

  const [isSwitch, setIsSwitch] = useState(true);

  const handleChange = () => {
    setIsSwitch(!isSwitch);
  }

  return (
    <div className={`App theme-${isSwitch ? 'light' : 'dark'}`}>
    {/*
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
    */}
      <Header themeSwitch={isSwitch} themeFunc={handleChange}/>
      <main>
        
      </main>
    </div>
  );
}

export default App;
