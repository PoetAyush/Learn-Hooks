import React from 'react';
import logo from './logo.svg';
import './App.css';
import HookCounterOne from './components/HookCounterOne'
import IntervalHookCounter from './components/IntervalHookCounter';
import IntervalClassCounter from './components/IntervalClassCounter';



function App() {
  return (
    <div className="App">
<IntervalClassCounter />
<IntervalHookCounter />

    </div>
  );
}

export default App;
